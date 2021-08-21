import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            value: ''
        }
    }

    editHandler = () => {
        this.setState({isEditing: true, value: this.props.item.title})
    }

    saveChanges = () => {
        this.setState({isEditing: false})
        this.props.updateTitle(this.props.item.id, this.state.value)
    }
    render() {

        if (this.state.isEditing) {
            return (
                <li className="editing">
                    <div className="view">
                        <input className="toggle" type="checkbox"/>
                        <label>test</label>
                        <button className="destroy"></button>
                    </div>
                    <input
                        autoFocus
                        className="edit"
                        value={this.state.value}
                        onChange={event => this.setState({value: event.target.value})}
                        onBlur={this.saveChanges}
                    />

                </li>
            );


        }
        return (
            <li className="">
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.item.completed}
                        onChange={() => this.props.toggleTodo(this.props.item.id)}/>
                    <label onDoubleClick={this.editHandler}>{this.props.item.title}</label>
                    <button
                        className="destroy"
                        onClick={() => this.props.removeToDo(this.props.item.id)}
                    ></button>
                </div>
            </li>
        );
    }
}

export default TodoItem;