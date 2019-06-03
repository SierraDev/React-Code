// const app = {
//     details: {
//         text: "You're adopted!",
//         hidden: true
//     }
// }

// const toggleText = () => {
//     app.details.hidden = !app.details.hidden
//     render();
// }

// const appRoot = document.getElementById("app");

// const render = () => {
//     const template = (
//     <div>
//         <h4>Visibility Toggle</h4>
//         <button onClick={toggleText}>Show Details</button>
//         {!app.details.hidden && <h1>{app.details.text}</h1>}
//     </div>
// );
//     ReactDOM.render(template, appRoot);
// };

// render();

//////////////////////--- COMPONENT STATE ---////////////////////
class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState)=> {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render(){
        return(
            <div>
                <h3>Visibility Toggle</h3>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <h1>
                        You're adopted!
                        </h1>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));