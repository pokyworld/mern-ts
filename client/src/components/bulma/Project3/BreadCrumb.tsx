import React, { Fragment } from "react"

export const BreadCrumb = (props: any) => {

    return (
        <Fragment>
            <nav className="breadcrumb is-left bc2" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/bulma">Bulma</a></li>
                    <li className="is-active"><a href="/bulma/3" aria-current="page">Project 3</a></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default BreadCrumb;