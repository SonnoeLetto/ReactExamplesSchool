import  { Component } from "react"


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler = (e) => {
        this.setState({value: e.target.value});
    }
    
    onKeyPressHandler = (e) => {
        if(e.key === "Enter") {
            this.props.createTodo(this.state.value);
            this.setState({value: ""});
        }
    }

    render() {
        return (
            <header className='header'>
                <h1>todos</h1>
                <input 
                    type="text"
                    placeholder="What needs to be done?"
                    className="new-todo"
                    value={this.state.value}
                    onChange = {this.onChangeHandler}
                    onKeyPress = {this.onKeyPressHandler}
                />
            </header>
        )
    }
}
export default Header;