const app = {
    title: "Indecision App",
    subtitle: "When you're indecisive.",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.options.value;

    if(option) {
        app.options.push(option);
        e.target.elements.options.value = '';
        renderOptions();
    }
};

const removeAllOptions = () => {
    app.options = [];
    renderOptions();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNum];
    console.log(randomNum);
    console.log(selectedOption);
};

const appRoot = document.getElementById("app");

const renderOptions = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here's your options: " : "No options"}</p>
        <button disabled={app.options.length === 0} onClick={makeDecision}>What Should I Do?</button>
        <button onClick={removeAllOptions}>Remove All</button>
        <ol>
            {
                app.options.map(option =><li key={option}>{option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="options"/>
            <button>Add Option</button>
        </form>
    </div>
);
    ReactDOM.render(template, appRoot);
};


renderOptions();