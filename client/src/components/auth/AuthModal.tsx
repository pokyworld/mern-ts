import React, { Fragment } from "react";
import SocialScroller from "./SocialScroller";
import AuthTabs from "./AuthTabs";
import LoginPanel from "./LoginPanel";
import RegisterPanel from "./RegisterPanel";
import ForgotPasswordPanel from "./ForgotPasswordPanel";
import SetPasswordPanel from "./SetPasswordPanel";

interface IProps {
    // toggleModal(modalName: string);
}

export const AuthModal = props => {
    const { toggleModal } = props;
    return (
        <Fragment>
            <div id="auth-modal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"></p>
                        <button
                            className="delete"
                            aria-label="close"
                            onClick={() => toggleModal("auth-modal")}
                        ></button>
                    </header>

                    <section className="modal-card-body">
                        <AuthTabs />
                        <div className="scrolling-wrapper">
                            <div id="authPageScroll" className="scroller">
                                <div id="tabOne" className="panel">
                                    {/*<LoginPanel />*/}
                                    {/*<ForgotPasswordPanel />*/}
                                </div>
                                <div id="tabTwo" className="panel">
                                    {/*<RegisterPanel />*/}
                                    {/*<SetPasswordPanel />*/}
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="modal-card-foot">
                        <p className="label" style={{ margin: 0 }}>
                            or login with:
                        </p>
                        <SocialScroller />
                        <div
                            className="is-size-7 has-text-centered"
                            style={{ padding: "3px 40px 8px", lineHeight: 1 }}
                        >
                            By creating this account, you agree to our{" "}
                            <a href="#privacy" target="_blank">
                                Privacy Policy
                            </a>
                            &amp;{" "}
                            <a href="#cookies" target="_blank">
                                Cookie Policy
                            </a>
                            .
                        </div>
                    </footer>
                </div>
            </div>
        </Fragment>
    );
};

const styles = {};

export default AuthModal;
