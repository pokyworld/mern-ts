import React, { Fragment } from "react";

interface IProps {}

export const SocialScroller = (props: IProps) => {
    return (
        <Fragment>
            <div className="scrolling-wrapper">
                <div id="authSocialScroll" className="scroller">
                    <div className="button social-div facebook-btn">
                        <i className="fab fa-facebook-f icon"></i>
                        <span className="label">facebook</span>
                    </div>
                    <div className="button social-div google-btn">
                        <i className="fab fa-google icon"></i>
                        <span className="label">google</span>
                    </div>
                    <div className="button social-div twitter-btn">
                        <i className="fab fa-twitter icon"></i>
                        <span className="label">twitter</span>
                    </div>
                    <div className="button social-div linkedin-btn">
                        <i className="fab fa-linkedin-in icon"></i>
                        <span className="label">linkedIn</span>
                    </div>
                    <div className="button social-div snapchat-btn">
                        <i className="fab fa-snapchat icon"></i>
                        <span className="label">snapchat</span>
                    </div>
                    <div className="button social-div pinterest-btn">
                        <i className="fab fa-pinterest icon"></i>
                        <span className="label">pinterest</span>
                    </div>
                    <div className="button social-div whatsapp-btn">
                        <i className="fab fa-whatsapp icon"></i>
                        <span className="label">whatsapp</span>
                    </div>
                    <div className="button social-div github-btn">
                        <i className="fab fa-github-alt icon"></i>
                        <span className="label">github</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SocialScroller;
