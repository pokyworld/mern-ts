import React, { Fragment } from "react";

import BreadCrumb from "../../components/bulma/Project3/BreadCrumb";

const bcProps = {

};

export const Project3 = (): JSX.Element => {
    return (
        <Fragment>

            <section className="section">
                <div className="container">
                    <div className="grid-1-2-1">
                        <BreadCrumb {...bcProps} />
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Project3;
