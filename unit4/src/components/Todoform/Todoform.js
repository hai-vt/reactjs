import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        var newItem = this.refs.itemName.value;
        if(newItem) {
            this.props.addItem(newItem);
            this.refs.form.reset();
        }
    }

    render () {
        return (
            <form href="form" onsubmit={this.onSubmit} className="form-inline">
                <input type="text" ref="itemName" className="form-control" placeholder="Add new to do ..." />
                <button className="btn btn-primary">Add</button>
            </form>
        )
    }
}