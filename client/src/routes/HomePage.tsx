import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Overlay from "../components/Overlay";
import AuthModal from "../components/auth/AuthModal";

interface IProps {
    // toggleModal: (modalName: string) => {};
}

export const HomePage = (props: IProps): JSX.Element => {
    // const { toggleModal } = props;
    return (
        <Fragment>
            <div id="googleApi"></div>

            <div id="main-content" className="section">
                <button
                    onClick={() => toggleModal("auth-modal")}
                    className="button is-link"
                    data-toggle="auth-modal"
                >
                    Login
                </button>
                <NavLink to="/animations" className="button is-link">
                    Animations
                </NavLink>
                <TransitionGroup>
                    <CSSTransition
                        in={true}
                        appear={true}
                        key={0}
                        timeout={1000}
                        classNames={"fade"}
                    >
                        <Overlay />
                    </CSSTransition>
                    <CSSTransition
                        in={true}
                        appear={true}
                        key={1}
                        timeout={2000}
                        classNames={"slide"}
                    >
                        <AuthModal toggleModal={toggleModal} />
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </Fragment>
    );
};

const styles = {};

const toggleModal = modalName => {
    const modal = document.querySelector(`#${modalName}`);
    if (modal.classList.contains("is-active")) {
        // animateCSS(modal, ".modal-card", "fadeOutDown", () => {});
        // animateCSS(modal, ".modal-background", "fadeOut", () => {});
        modal.classList.remove("is-active");
    } else {
        // animateCSS(modal, ".modal-background", "fadeIn", () => {});
        // animateCSS(modal, ".modal-card", "fadeInUp", () => {});
        modal.classList.add("is-active");
    }
};

// const animateCSS = (modal, queryName, animationName, cb) => {
//     const elem = modal.querySelector(queryName);
//     elem.classList.add("animated", animationName);
//     const handleAnimationEnd = () => {
//         elem.classList.remove("animated", animationName);
//         elem.removeEventListener("animationend", handleAnimationEnd);
//         if (animationName === "fadeOut") {
//             modal.classList.remove("is-active");
//         }
//         if (typeof cb === "function") cb();
//     };
//     elem.addEventListener("animationend", handleAnimationEnd);
// };

export default HomePage;
