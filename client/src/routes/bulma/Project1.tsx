import React, { Fragment } from "react";

import Hero from "../../components/bulma/Project1/Hero";
import Columns from "../../components/bulma/Project1/Columns";

export const Project1 = (): JSX.Element => {
    return (
        <Fragment>
            <Hero />
            <Columns />
        </Fragment>
    )
};

export default Project1;
