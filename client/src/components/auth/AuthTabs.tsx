import React, { Fragment } from "react";

interface IProps {}

export const AuthTabs = (props: IProps): JSX.Element => {
    return (
        <Fragment>
            <div className="tabs is-fullwidth">
                <ul id="authTabs">
                    <li
                        id="authTabLogin"
                        className="tab is-active"
                        onClick={() => setAuthTab("authTabLogin", "auth-modal")}
                    >
                        <a href="#tabOne">
                            <span className="icon">
                                <i
                                    className="fas fa-user"
                                    aria-hidden="true"
                                ></i>
                            </span>
                            <span className="subtitle is-size-5">Login</span>
                        </a>
                    </li>
                    <li
                        id="authTabRegister"
                        className="tab"
                        onClick={() =>
                            setAuthTab("authTabRegister", "auth-modal")
                        }
                    >
                        <a href="#tabTwo">
                            <span className="icon">
                                <i
                                    className="fas fa-user-plus"
                                    aria-hidden="true"
                                ></i>
                            </span>
                            <span className="subtitle is-size-5">Register</span>
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

const styles = {};

const setAuthTab = (item: string, parent: string) => {
    return true;
};

export default AuthTabs;
