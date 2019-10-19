import validator = require("validator");
const isEmpty = require("../is-empty");

export const validateRegisterInput = (data: any) => {
    let errors: any[] = [];

    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.repeatPassword = !isEmpty(data.repeatPassword)
        ? data.repeatPassword
        : "";

    if (!validator.isLength(data.firstName, { min: 2, max: 30 })) {
        errors.push({
            firstName: "First Name must be between 2 and 30 characters"
        });
    }

    if (validator.isEmpty(data.firstName)) {
        errors.push({ firstName: "First Name field is required" });
    }

    if (!validator.isLength(data.lastName, { min: 2, max: 30 })) {
        errors.push({
            lastName: "Last Name must be between 2 and 30 characters"
        });
    }

    if (validator.isEmpty(data.lastName)) {
        errors.push({ lastName: "First Name field is required" });
    }

    if (validator.isEmpty(data.username)) {
        errors.push({ username: "Username field is required" });
    }

    if (validator.isEmpty(data.email)) {
        errors.push({ email: "Email field is required" });
    }

    if (!validator.isEmail(data.email)) {
        errors.push({ email: "Email is invalid" });
    }

    if (validator.isEmpty(data.password)) {
        errors.push({ password: "Password field is required" });
    }

    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.push({ password: "Password must be at least 6 characters" });
    }

    if (validator.isEmpty(data.repeatPassword)) {
        errors.push({ repeatPassword: "Confirm Password field is required" });
    } else {
        if (!validator.equals(data.password, data.repeatPassword)) {
            errors.push({ repeatPassword: "Passwords must match" });
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export default validateRegisterInput;
