import React, { Component, Fragment } from "react";

import PasswordProgress from "./PasswordProgress";

interface IFormProps {
    // action: string;
}

export interface IValues {
    /* Key value pairs for all the field values with key being the field name */
    [key: string]: any;
}

export interface IErrors {
    /* The validation error messages for each field (key is the field name */
    [key: string]: string;
}

export interface IFormState {
    /* The field values */
    values: IValues;

    /* The field validation error messages */
    errors: IErrors;

    /* Whether the form has been successfully submitted */
    submitSuccess?: boolean;
}

export class SetPasswordPanel extends Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);

        const errors: IErrors = {};
        const values: IValues = {};
        this.state = {
            errors,
            values
        };
    }

    /**
     * Returns whether there are any errors in the errors object that is passed in
     * @param {IErrors} errors - The field errors
     */
    private haveErrors(errors: IErrors) {
        let haveError: boolean = false;
        Object.keys(errors).map((key: string) => {
            if (errors[key].length > 0) {
                haveError = true;
            }
        });
        return haveError;
    }

    /**
     * Handles form submission
     * @param {React.FormEvent<HTMLFormElement>} e - The form event
     */
    private handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        if (this.validateForm()) {
            const submitSuccess: boolean = await this.submitForm();
            this.setState({ submitSuccess });
        }
    };

    /**
     * Executes the validation rules for all the fields on the form and sets the error state
     * @returns {boolean} - Whether the form is valid or not
     */
    private validateForm(): boolean {
        // TODO - validate form
        return true;
    }

    /**
     * Submits the form to the http api
     * @returns {boolean} - Whether the form submission was successful or not
     */
    private async submitForm(): Promise<boolean> {
        // TODO - submit the form
        return true;
    }

    public render() {
        const { submitSuccess, errors } = this.state;
        return (
            <Fragment>
                <div id="setPasswordPanel" className="panel-block hidden">
                    <form id="setPasswordForm">
                        <h3 className="label is-size-5 is-wrapped">
                            Set a secure password.
                        </h3>

                        <div className="field">
                            <label className="label">Password</label>
                            <div
                                id="register-password"
                                className="control has-icons-left has-icons-right"
                            >
                                <input
                                    className="input"
                                    type="password"
                                    placeholder="Enter your Password"
                                    value={this.state.values.registerPassword}
                                    // autocomplete="none"
                                    required
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <span
                                    // toggle="#register-password"
                                    className="icon is-small is-right toggle-password"
                                >
                                    <i className="fas fa-eye"></i>
                                </span>
                            </div>
                            <p className="help"></p>
                        </div>

                        <div
                            className="field is-grouped"
                            style={{ margin: "-20px, 0 0 0" }}
                        >
                            <span className="label is-size-7">Weak</span>
                            <span className="label is-size-7">Better</span>
                            <span className="label is-size-7">Okay</span>
                            <span className="label is-size-7">Stronger</span>
                            <span className="label is-size-7">Strong</span>
                        </div>

                        <PasswordProgress />

                        <div className="field">
                            <label className="label">Repeat Password</label>
                            <div
                                id="register-repeat"
                                className="control has-icons-left has-icons-right"
                            >
                                <input
                                    className="input"
                                    type="password"
                                    placeholder="Re-enter your Password"
                                    value={this.state.values.repeatPassword}
                                    // autocomplete="none"
                                    required
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-retweet"></i>
                                </span>
                                <span
                                    // toggle="#register-repeat"
                                    className="icon is-small is-right toggle-password"
                                >
                                    <i className="fas fa-eye"></i>
                                </span>
                            </div>
                            <p className="help"></p>
                        </div>

                        <div className="field">
                            <button
                                id="authReturnToRegisterButton"
                                className="button is-outlined is-link"
                                disabled={this.haveErrors(errors)}
                            >
                                &nbsp;Back to Register
                            </button>

                            <div className="control">
                                <button
                                    id="authSetPasswordButton"
                                    className="button is-link is-fullwidth"
                                >
                                    CONFIRM
                                </button>
                            </div>
                        </div>
                        {submitSuccess && (
                            <div className="alert alert-info" role="alert">
                                The form was successfully submitted!
                            </div>
                        )}
                        {submitSuccess === false && !this.haveErrors(errors) && (
                            <div className="alert alert-danger" role="alert">
                                Sorry, an unexpected error has occurred
                            </div>
                        )}
                        {submitSuccess === false && this.haveErrors(errors) && (
                            <div className="alert alert-danger" role="alert">
                                Sorry, the form is invalid. Please review,
                                adjust and try again
                            </div>
                        )}
                    </form>
                </div>
            </Fragment>
        );
    }
}

const styles = {};

export default SetPasswordPanel;
