import React, { Component, Fragment } from "react";

interface IFormProps {}
interface IFormState {}

export class LoginPanel extends Component<IFormProps, IFormState> {
    public render() {
        return (
            <Fragment>
                <div id="loginPanel" className="panel-block">
                    <form id="loginForm">
                        <div className="field">
                            <label className="label">Username or Email</label>
                            <div
                                id="login-username"
                                className="control has-icons-left has-icons-right"
                            >
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Enter your username or email"
                                    value=""
                                    // autocomplete="username"
                                    required
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right"></span>
                            </div>
                            <p className="help"></p>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div
                                id="login-password"
                                className="control has-icons-left has-icons-right"
                            >
                                <input
                                    className="input"
                                    type="password"
                                    placeholder="Enter your Password"
                                    // value={}
                                    // autocomplete="current-password"
                                    required
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <span
                                    // toggle="#login-password"
                                    className="icon is-small is-right toggle-password"
                                >
                                    <i className="fas fa-eye"></i>
                                </span>
                            </div>
                            <p className="help"></p>
                        </div>

                        <div className="field" style={{ visibility: "hidden" }}>
                            <label className="label">Hidden</label>
                            <div id="login-hidden" className="control">
                                <input className="input" type="text" value="" />
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div id="login-remember" className="control">
                                <input
                                    id="authSwitchRemember"
                                    type="checkbox"
                                    name="authSwitchRemember"
                                    className="switch is-rounded is-link"
                                />
                                <label>Remember me</label>
                            </div>
                            <div className="control">
                                <button
                                    id="authForgotPasswordButton"
                                    className="button is-link is-outlined"
                                >
                                    Forgot password&nbsp;
                                </button>
                            </div>
                        </div>

                        <div className="field">
                            <div id="authLoginSubmitButton" className="control">
                                <button className="button is-link is-fullwidth">
                                    <span className="label has-text-white">
                                        LOGIN
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

const styles = {};

export default LoginPanel;
