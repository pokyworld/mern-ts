import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const SkillsPage = (): JSX.Element => {
    return (
        <Fragment>
            <h1 className="title is-size-2">Skills Page</h1>
            <p className="is-size-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt tempore in quisquam aliquam soluta incidunt id eaque.
                Dolorum, illo maiores, veniam possimus vitae necessitatibus enim
                libero quaerat blanditiis, consequatur neque?
            </p>
            <NavLink to="/" className="button is-link">
                Home
            </NavLink>
        </Fragment>
    );
};

export default SkillsPage;
