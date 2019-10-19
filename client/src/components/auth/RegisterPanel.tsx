import React, { Fragment } from "react";

interface IProps {}

export const RegisterPanel = (props: IProps): JSX.Element => {
    return (
        <Fragment>
            <div id="registerPanel" className="panel-block">
                <form id="registerForm">
                    <div className="field">
                        <label className="label">Name</label>
                        <div
                            id="register-name"
                            className="control has-icons-left has-icons-right"
                        >
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter Full Name"
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right"></span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Username</label>
                        <div
                            id="register-username"
                            className="control has-icons-left has-icons-right"
                        >
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter unique Username"
                                value=""
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-tag"></i>
                            </span>
                            <span className="icon is-small is-right"></span>
                        </div>
                        <p className="help"></p>
                    </div>

                    <div className="field" style={{ marginBottom: 0 }}>
                        <label className="label">Email</label>
                        <div
                            id="register-email"
                            className="control has-icons-left has-icons-right"
                        >
                            <input
                                className="input"
                                type="email"
                                placeholder="Enter your Email address"
                                value=""
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right"></span>
                        </div>
                        <p className="help"></p>
                    </div>

                    <div className="field" style={{ marginBottom: 0 }}>
                        <div id="register-captcha">
                            <div style={{ width: 304, height: 90 }}>
                                <div>
                                    <iframe
                                        src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LexF0sUAAAAADiQjz9BMiSrqplrItl-tWYDSfWa&amp;co=aHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmc6NDQz&amp;hl=en-GB&amp;v=Zy-zVXWdnDW6AUZkKlojAKGe&amp;size=normal&amp;cb=qzuxqgx23slu"
                                        width="304"
                                        height="50"
                                        role="presentation"
                                        name="a-g9e4tskre3h3"
                                        // frameborder="0"
                                        scrolling="no"
                                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                                    ></iframe>
                                </div>
                                <textarea
                                    id="g-recaptcha-response"
                                    name="g-recaptcha-response"
                                    className="g-recaptcha-response"
                                    style={{
                                        width: 250,
                                        height: 40,
                                        border: "1px solid rgb(193, 193, 193)",
                                        margin: "10px 25px",
                                        padding: 0,
                                        resize: "none",
                                        display: "none"
                                    }}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <div id="authRegisterSubmitButton" className="control">
                            <button className="button is-link is-fullwidth">
                                <span className="label has-text-white">
                                    REGISTER
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

const styles = {};

export default RegisterPanel;
