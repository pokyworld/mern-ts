import React, { Fragment } from "react";

export const Buttons = (): JSX.Element => {
    return (
        <Fragment>
            <section className="section">
                <div className="container">
                    <h1 className="title">Buttons</h1>
                    <button className="button">Button</button>
                    <button className="button is-active">Button</button>
                    <hr />
                    <button className="button is-primary">Primary button</button>
                    <button className="button is-success">Success button</button>
                    <button className="button is-info">Info button</button>
                    <button className="button is-danger">Danger button</button>
                    <button className="button is-warning">Danger button</button>
                    <hr />
                    <button className="button is-primary is-outlined">Primary button</button>
                    <button className="button is-success is-outlined">Success button</button>
                    <button className="button is-info is-outlined">Info button</button>
                    <button className="button is-danger is-outlined">Danger button</button>
                    <button className="button is-warning is-outlined">Danger button</button>
                    <hr />
                    <button className="button is-outlined">Outlined button</button>
                    <button className="button is-inverted">Inverted button</button>
                    <button className="button is-link">Link button</button>
                    <hr />
                    <button className="button is-small">Small button</button>
                    <button className="button is-medium">Medium button</button>
                    <button className="button is-large">Large button</button>
                    <hr />
                    <button className="button is-loading">Loading button</button>
                    <hr />
                    <div className="field has-addons">
                        <p className="control">
                            <a className="button">
                                <span className="icon is-small">
                                    <i className="fa fa-bold"></i>
                                </span>
                                <span>Bold</span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button">
                                <span className="icon is-small">
                                    <i className="fa fa-italic"></i>
                                </span>
                                <span>Italic</span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button">
                                <span className="icon is-small">
                                    <i className="fa fa-underline"></i>
                                </span>
                                <span>Underline</span>
                            </a>
                        </p>
                    </div>

                    <div className="field has-addons">
                        <p className="control">
                            <a className="button">
                                <span className="icon is-small">
                                    <i className="fa fa-align-left"></i>
                                </span>
                                <span>Left</span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button">
                                <span className="icon is-small">
                                    <i className="fa fa-align-center"></i>
                                </span>
                                <span>Center</span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button">
                                <span className="icon is-small">
                                    <i className="fa fa-align-right"></i>
                                </span>
                                <span>Right</span>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Buttons;
