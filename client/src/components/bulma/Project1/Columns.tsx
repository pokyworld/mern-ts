import React, { Fragment } from "react";

import Card from "./Card";

export const Columns = (): JSX.Element => {
    return (
        <Fragment>
            <div className="columns">
                <div className="column"><Card title="Quote" subtitle="Subtitle" /></div>
                <div className="column"><Card title="Quote" subtitle="Subtitle" /></div>
                <div className="column"><Card title="Quote" subtitle="Subtitle" /></div>
            </div>
        </Fragment>
    );
};
export default Columns;