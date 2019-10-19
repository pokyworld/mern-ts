import React, { Fragment } from "react";
// import { IPanel, IPanels } from "../../../interfaces";
import { IPanel, IPanels } from "../../../typescript/interfaces";

// import Card from "./Card";
import BigPanel from "./BigPanel";

const renderPanels = (panelData: IPanels): any => {
    const { panels } = panelData;
    return panels.map((panel: IPanel) => {
        const { id, title, body, icon, panelColors } = panel;
        return (
            <div
                key={id}
                className="column is-half-tablet is-one-third-desktop"
            >
                <BigPanel
                    id={id}
                    title={title}
                    body={body}
                    icon={icon}
                    panelColors={panelColors}
                />
            </div>
        );
    });
};

export const BigPanels = (panelData: IPanels): JSX.Element => {
    const { sectionColors } = panelData;
    const { backgroundColor, color } = sectionColors;
    return (
        <Fragment>
            <section className={`section has-background-${backgroundColor}`}>
                <div className="container">
                    <div className="columns is-multiline">
                        {renderPanels(panelData)}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default BigPanels;
