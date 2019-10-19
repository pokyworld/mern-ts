import validator = require("validator");
const isEmpty = require("../is-empty");

export const validateUpdateInput = (data: any) => {
    let errors: any[] = [];

    if (data.firstName) {
        data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
        if (!validator.isLength(data.firstName, { min: 2, max: 30 })) {
            errors.push({
                firstName: "First Name must be between 2 and 30 characters"
            });
        }
        if (validator.isEmpty(data.firstName)) {
            errors.push({ firstName: "First Name field is required" });
        }
    }

    if (data.lastName) {
        data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
        if (!validator.isLength(data.lastName, { min: 2, max: 30 })) {
            errors.push({
                lastName: "Last Name must be between 2 and 30 characters"
            });
        }
        if (validator.isEmpty(data.lastName)) {
            errors.push({ lastName: "First Name field is required" });
        }
    }

    if (data.username) {
        data.username = !isEmpty(data.username) ? data.username : "";
        if (validator.isEmpty(data.username)) {
            errors.push({ username: "Username field is required" });
        }
    }

    if (data.email) {
        data.email = !isEmpty(data.email) ? data.email : "";
        if (validator.isEmpty(data.email)) {
            errors.push({ email: "Email field is required" });
        }
        if (!validator.isEmail(data.email)) {
            errors.push({ email: "Email is invalid" });
        }
    }

    if (data.password) {
        data.password = !isEmpty(data.password) ? data.password : "";
        if (validator.isEmpty(data.password)) {
            errors.push({ password: "Password field is required" });
        }
        if (!validator.isLength(data.password, { min: 6, max: 30 })) {
            errors.push({ password: "Password must be at least 6 characters" });
        }
    }

    if (data.repeatPassword) {
        data.repeatPassword = !isEmpty(data.repeatPassword)
            ? data.repeatPassword
            : "";
        if (validator.isEmpty(data.repeatPassword)) {
            errors.push({
                repeatPassword: "Confirm Password field is required"
            });
        } else {
            if (!validator.equals(data.password, data.repeatPassword)) {
                errors.push({ repeatPassword: "Passwords must match" });
            }
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export default validateUpdateInput;
