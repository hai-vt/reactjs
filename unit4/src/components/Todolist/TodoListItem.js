import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }

    onClickClose() {

    }

    onClickDone() {

    }

    render () {
        var todoClass = this.pros.item.done ? "done" : "undone";
        return (
            <li className="list-group-item">
            <div className={todoClass}>
                <span onClick={onClickDone()}>
                    "Done"
                </span>
                {this.props.item.value}
                <button type="button" className="close" onClick={onClickClose()}>x</button>
            </div>
            </li>
        )
    }
}