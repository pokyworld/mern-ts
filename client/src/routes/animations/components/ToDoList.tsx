import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

export const ToDoList = props => {
    const [items, setItems] = useState([
        { id: uuid(), text: "Buy eggs" },
        { id: uuid(), text: "Pay bills" },
        { id: uuid(), text: "Invite friends over" },
        { id: uuid(), text: "Fix the TV" }
    ]);

    const { listWrapper, toDoList, toDoText, buttonText, addButton } = styles;
    return (
        <div id="toDoList" className="section has-text-centered">
            <ul style={listWrapper} className="is-inline-block">
                <TransitionGroup style={toDoList} className="has-text-left">
                    {items.map(({ id, text }) => (
                        <CSSTransition key={id} timeout={500} classNames="item">
                            <li>
                                <button
                                    className="button is-small is-danger remove-btn"
                                    onClick={() =>
                                        setItems(items =>
                                            items.filter(item => item.id !== id)
                                        )
                                    }
                                    style={buttonText}
                                >
                                    &times;
                                </button>
                                <p
                                    className="is-size-4 is-inline-block"
                                    style={toDoText}
                                >
                                    {text}
                                </p>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
            <button
                className="button is-link is-block"
                style={addButton}
                onClick={() => {
                    const text = prompt("Enter some text");
                    if (text) {
                        setItems(items => [...items, { id: uuid(), text }]);
                    }
                }}
            >
                Add Item
            </button>
        </div>
    );
};

const styles = {
    listWrapper: {
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        // minHeight: "70vh"
    },
    toDoList: {
        minWidth: 250
    },
    toDoText: {
        paddingTop: 5
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 600
    },
    addButton: {
        marginTop: 30
        // float: "right",
        // marginRight: 25
    }
};

export default ToDoList;
