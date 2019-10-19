import React, { Fragment } from "react";

import Hero from "../../components/bulma/Project2/Hero";
import BigPanels from "../../components/bulma/Project2/BigPanels";
import SmallPanels from "../../components/bulma/Project2/SmallPanels";
import { IPanels, IHero } from "../../typescript/interfaces";

// Props for components
const heroProps: IHero = {
    title: {
        text: "",
        size: "",
        color: ""
    },
    subtitle: {
        text: "",
        size: "",
        color: ""
    },
    image: {
        url: "https://bulma.io/images/bulma-logo.png",
        alt: "Bulma CSS",
        maxWidth: 180
    },
    backgroundColor: "white",
    fullHeight: false
};

const panelProps1: IPanels = {
    panels: [
        {
            id: 1,
            title: "Bulma",
            body:
                "Bulma is a modern CSS framework from @jgthms, based on Flexbox. Using Bulma, we can describe our website's design using just classes.",
            icon: "fa-2x fa-css3",
            panelColors: { backgroundColor: "info", color: "white" }
        },
        {
            id: 2,
            title: "Flexbox",
            body:
                "Flexbox is a CSS spec that makes sectioning and aligning more natural. We don't need to know Flexbox but it's how Bulma works behind-the-scenes.",
            icon: "fa-2x fa-align-justify",
            panelColors: { backgroundColor: "primary", color: "white" }
        },
        {
            id: 3,
            title: "Classes",
            body:
                "Instead of writing our CSS per - element, we can use predefined classes. With enough classes, we can describe our website design using semantics.",
            icon: "fa-2x fa-shield",
            panelColors: { backgroundColor: "warning", color: "black" }
        }
    ],
    sectionColors: { backgroundColor: "light", color: "black" }
};

const panelProps2: IPanels = {
    panels: [
        {
            id: 1,
            title: "Columns",
            body:
                "The power of <strong>Flexbox</strong> in a simple interface.",
            icon: "fa-2x fa-columns has-text-warning",
            panelColors: { backgroundColor: "white", color: "black" }
        },

        {
            id: 2,
            title: "Form",
            body:
                "The indispensable <strong>form controls</strong>, designed for maximum clarity.",
            icon: "fa-2x fa-wpforms has-text-info",
            panelColors: { backgroundColor: "white", color: "black" }
        },

        {
            id: 3,
            title: "Components",
            body: "Advanced multi-part components with lots of possibilities.",
            icon: "fa-2x fa-cubes has-text-danger",
            panelColors: { backgroundColor: "white", color: "black" }
        },

        {
            id: 4,
            title: "Modifiers",
            body:
                "An <strong>easy-to-read</strong> naming system designed for humans.",
            icon: "fa-2x fa-cogs has-text-grey",
            panelColors: { backgroundColor: "white", color: "black" }
        },

        {
            id: 5,
            title: "Layout",
            body:
                "Design the <strong>structure</strong> of your webpage with these CSS classes.",
            icon: "fa-2x fa-outdent has-text-danger",
            panelColors: { backgroundColor: "white", color: "black" }
        },

        {
            id: 6,
            title: "Elements",
            body:
                "Essential interface elements that only require a <strong>single CSS class</strong>.",
            icon: "fa-2x fa-cube has-text-link",
            panelColors: { backgroundColor: "white", color: "primary" }
        }
    ],
    sectionColors: { backgroundColor: "white", color: "black" }
};

export const Project2 = (): JSX.Element => {
    return (
        <Fragment>
            <Hero {...heroProps} />
            <BigPanels {...panelProps1} />
            <SmallPanels {...panelProps2} />
        </Fragment>
    );
};

export default Project2;
