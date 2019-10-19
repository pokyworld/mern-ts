import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

export const BulmaHome = (props: any): JSX.Element => {
    return (
        <Fragment>
            <nav className="panel">
                <a className="panel-block" href="/bulma/1">
                    <span className="panel-icon">
                        <i className="fa fa-book" aria-hidden="true"></i>
                    </span>
                    Project 1
                </a>
                <a className="panel-block" href="/bulma/2">
                    <span className="panel-icon">
                        <i className="fa fa-book" aria-hidden="true"></i>
                    </span>
                    Project 2
                </a>
                <a className="panel-block" href="/bulma/3">
                    <span className="panel-icon">
                        <i className="fa fa-book" aria-hidden="true"></i>
                    </span>
                    Project 3
                </a>
            </nav>
        </Fragment>
    );
};
export default BulmaHome;
