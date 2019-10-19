
const passwordScore = (input) => {
    // Rules:

    // Nothing : 0
    // Less than min length : + 10
    // Meets min length : + 20
    const minLength = 8;
    let score = startScore(input, minLength);


    // Unique characters less than half min length : - 3 **
    // Unique characters less than min length : 0 **
    // Unique characters meets min length : + 10 
    // Unique characters double min length : + 20
    score += uniqueChars(input, minLength);

    // Count lowerCase < 1 : - 3
    // Count lowerCase <= 5 : + 10
    // Count lowerCase > 5 : + 20 **
    score += lowerCase(input);

    // Count upperCase < 1 : - 3
    // Count upperCase = 1 : + 10 **
    // Count upperCase > 1 : + 20
    score += upperCase(input);

    // Count number = 0 : - 3
    // Count numbers = 1 : + 10 **
    // Count numbers > 1 : + 20
    score += withNumerics(input);

    // Count characters = 0 : - 3 **
    // Count characters = 1 : + 10
    // Count characters > 1 : + 20
    score += withChars(input);

    // Penalty for All Numeric
    // allNumeric = false : 0
    // allNumeric = true : -10
    score += allNumeric(input);

    // Penalty for All lowerCase
    // allLowerCase = false : 0
    // allLowerCase = true : -3
    score += allLowerCase(input);





    // console.log(`Password score (${input}): ${score}`);
    let rating = getRating(score);
    console.log(`${input}: ${JSON.stringify(rating)}`);
};

const startScore = (input, target) => {
    switch (true) {
        case input.length >= target: return 20;
        case input.length > 0 && input.length < target: return 10;
        default: return 1;
    }
};

const uniqueChars = (input, target) => {
    const unique = input.replace(/(.)(?=.*\1)/g, "");
    switch (true) {
        case unique.length >= (target * 2): return 20;
        case unique.length >= target: return 10;
        case unique.length >= Math.floor(target / 2): return 0;
        default: return -3;
    }
};

const lowerCase = (input) => {
    const result = input.replace(/[^a-z]/g, "");
    switch (true) {
        case result.length > 5: return 20;
        case result.length === 0: return -3;
        default: return 10;
    }
};

const upperCase = (input) => {
    const result = input.replace(/[^A-Z]/g, "");
    switch (true) {
        case result.length > 5: return 20;
        case result.length === 0: return -5;
        default: return 10;
    }
};

const withNumerics = (input) => {
    const result = input.replace(/[^0-9]/g, "");
    switch (true) {
        case result.length > 1: return 20;
        case result.length === 1: return 5;
        default: return -5;

    }
};

const withChars = (input) => {
    const result = input.replace(/[a-zA-Z0-9]/g, "");
    console.log(result);
    switch (true) {
        case result.length > 1: return 30;
        case result.length === 1: return 15;
        default: return -5;

    }
};

const allLowerCase = (input) => {
    const result = input.replace(/[^a-z]/g, "");
    switch (true) {
        case result.length === input.length: return -20;
        default: return 0;
    }
};

const allNumeric = (input) => {
    const result = input.replace(/[^0-9]/g, "");
    switch (true) {
        case result.length === input.length: return -20;
        default: return 0;
    }
};

const getRating = (score) => {
    // Bad(0)/Weak(25)/Okay(50)/Stronger(75)/Strong(100)
    // is-danger, is-warning, is-info, is-primary, is-success
    switch (true) {
        case score <= Math.floor((0 + 25) / 2): return { score: 5, class: "is-danger", rating: "Bad password", raw: score };
        case score <= Math.floor((25 + 50) / 2): return { score: 30, class: "is-warning", rating: "Weak password", raw: score };
        case score <= Math.floor((50 + 75) / 2): return { score: 55, class: "is-info", rating: "Okay password", raw: score };
        case score <= Math.floor((75 + 100) / 2): return { score: 75, class: "is-primary", rating: "Stronger password", raw: score };
        default: return { score: 100, class: "is-success", rating: "Strong password", raw: score };
    }
}

module.exports = passwordScore;