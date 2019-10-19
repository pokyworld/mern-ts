import React, { Fragment } from "react";
import { IPanel } from "../../../typescript/interfaces";

export const SmallPanel = (panel: IPanel) => {
    const {
        title = "",
        body = "",
        icon = "",
        panelColors = { backgroundColor: "white", color: "black" }
    } = panel;
    const { backgroundColor, color } = panelColors;
    return (
        <Fragment>
            <article className={`media notification is-${backgroundColor}`}>
                <figure className="media-left">
                    <span className="icon is-medium">
                        <i className={`fa ${icon}`}></i>
                    </span>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <h1 className="title is-size-4">{title}</h1>
                        <p
                            className={`subtitle is-size-5`}
                            dangerouslySetInnerHTML={{ __html: body }}
                        ></p>
                    </div>
                </div>
            </article>
        </Fragment>
    );
};

export default SmallPanel;
