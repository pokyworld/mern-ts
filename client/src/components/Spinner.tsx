import React, { Fragment } from "react";

interface IProps {}

export const Spinner = (props: IProps) => {
    return (
        <Fragment>
            <div className="spinner-loading-overlay"></div>
        </Fragment>
    );
};

const styles = {};

export default Spinner;
