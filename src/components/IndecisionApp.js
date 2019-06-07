import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
        state = {
            options: [],
            selectedOption: undefined
        };
        handleAddOption = (option) => {
            if (!option) {
                return 'You forgot to type something valid.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Already on the list.';
            }
            this.setState((prevState) => ({
                options: prevState.options.concat(option)
            }));
        }
        handlePick = () => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const selectedOption = this.state.options[randomNum];
            this.setState(()=> ({
                selectedOption: selectedOption
            }));
        }
        handleDeleteOptions = () => {
            this.setState(() => ({
                options: []
            }));
        }
        handleDeleteOption = (optionToRemove) => {
            this.setState((prevState) => ({
                options: prevState.options.filter((option) => optionToRemove !== option)
            }));
        }
        handleClearSelectedOption = () => {
            this.setState(() => ({selectedOption: undefined}));
        }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch (e){
            // do nothing
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log('component will unmount');
    }
    render(){
        const subtitle = "When You're Indecisive About Life.";
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <div className="widget">
                    <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                    <AddOption
                    handleAddOption={this.handleAddOption}
                 />
                </div>
                 <OptionModal
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
                 />
                </div>
            </div>
        );
    }
}