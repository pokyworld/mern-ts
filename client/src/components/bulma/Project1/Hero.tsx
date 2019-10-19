import React, { Fragment } from "react";

export const Hero = (): JSX.Element => {
    return (
        <Fragment>
            <section className="hero is-info">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1">Coding Quotes</h1>
                        <h3 className="subtitle is-3">Like your Favorites</h3>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Hero;