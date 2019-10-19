import React, { Fragment } from "react";
import { IHero } from "../../../typescript/interfaces";

export const Hero = (props: IHero): JSX.Element => {
    const {
        title,
        subtitle,
        image,
        backgroundColor = "white",
        fullHeight = false
    } = props;
    return (
        <Fragment>
            <section
                className={`hero
                    ${backgroundColor && " has-background-" + backgroundColor}
                    ${fullHeight && " is-fullheight"}
                    `}
            >
                <div className="hero-body">
                    <div className="container">
                        <figure className="image has-text-centered">
                            {image.url && (
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    style={{
                                        maxWidth: image.maxWidth,
                                        margin: "auto"
                                    }}
                                />
                            )}
                            {title && (
                                <h1
                                    className={`title 
                                        ${title.size && " " + title.size}
                                    `}
                                    style={{ color: title.color }}
                                >
                                    {title.text}
                                </h1>
                            )}
                            {subtitle && (
                                <h3
                                    className={`subtitle 
                                        ${subtitle.size && " " + subtitle.size}
                                    `}
                                    style={{ color: subtitle.color }}
                                >
                                    {subtitle.text}
                                </h3>
                            )}
                        </figure>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Hero;
