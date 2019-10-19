import React, { Fragment } from "react";

interface IProps {}

export const ForgotPasswordPanel = (props: IProps): JSX.Element => {
    return (
        <Fragment>
            <div id="forgotPasswordPanel" className="panel-block hidden">
                <form id="forgotForm">
                    <h3 className="title is-size-5">Reset Password</h3>

                    <div className="field">
                        <label className="label">
                            Registered Email address
                        </label>
                        <div
                            id="forgot-email"
                            className="control has-icons-left has-icons-right"
                        >
                            <input
                                className="input"
                                type="email"
                                placeholder="Enter your registered email"
                                value=""
                                // autocomplete="current-email"
                                required
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right"></span>
                        </div>
                        <p className="help"></p>
                    </div>

                    <div className="field">
                        <div id="forgot-captcha">
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
                        <div className="control">
                            <button
                                id="authReturnToLoginButton"
                                className="button is-outlined is-link"
                            >
                                &nbsp;Back to Login
                            </button>
                        </div>
                    </div>

                    <div className="field">
                        <div id="forgot-send-email" className="control">
                            <button className="button is-link is-fullwidth">
                                <span className="label has-text-white">
                                    RESET PASSWORD
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

export default ForgotPasswordPanel;
