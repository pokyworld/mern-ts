import React, { Fragment } from "react";

import ToDoList from "./components/ToDoList";

export const Animations = props => {
    return (
        <div style={styles.wrapper}>
            <ToDoList />
        </div>
    );
};

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        minHeight: "99vh"
    }
};

export default Animations;
