import React, { Fragment } from "react";

interface IProps {}

export const PasswordProgress = (props: IProps) => {
    return (
        <Fragment>
            <div className="progress-wrapper">
                <progress
                    id="password-strength"
                    className="progress is-small is-info"
                    value="0"
                    max="100"
                    data-help="Okay password"
                ></progress>
            </div>
        </Fragment>
    );
};

const styles = {};

export default PasswordProgress;
