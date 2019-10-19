import validator = require("validator");
const isEmpty = require("../is-empty");

export const validateLoginInput = (data: any) => {
    let errors: any[] = [];

    if (data.user) {
        data.user = !isEmpty(data.user) ? data.user : "";
        // test if valid email, and assume username otherwise
        if (!validator.isEmail(data.user)) {
            // Username assumed
            data.username = data.user;
            if (!validator.isLength(data.user, { min: 6, max: 30 })) {
                errors.push({ user: "Username must be at least 6 characters" });
            }
            if (data.user.indexOf("@") >= 0) {
                errors.push({ user: "Email is invalid" });
            }
        } else {
            // is email
            data.email = data.user;
        }
    } else {
        errors.push({ user: "Username or Email is required" });
    }

    data.password = !isEmpty(data.password) ? data.password : "";
    if (validator.isEmpty(data.password)) {
        errors.push({ password: "Password field is required" });
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export default validateLoginInput;
