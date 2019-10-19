// Document Load
document.addEventListener("DOMContentLoaded", () => {
    if (!CSS.supports('scroll-snap-align: start')) {
        console.log("No Scroll snap support");
    };  // Info only

    const authModal = document.querySelector("#auth-modal");

    const authForgotPasswordButton = authModal.querySelector("#authForgotPasswordButton");
    authForgotPasswordButton.addEventListener("click", (e) => {
        e.preventDefault();
        authLoginDrawerToggle(authModal);
    }, false);

    const authReturnToLoginButton = authModal.querySelector("#authReturnToLoginButton");
    authReturnToLoginButton.addEventListener("click", (e) => {
        e.preventDefault();
        authLoginDrawerToggle(authModal);
    }, false);

    const authRegisterSubmitButton = authModal.querySelector("#authRegisterSubmitButton");
    authRegisterSubmitButton.addEventListener("click", (e) => {
        e.preventDefault();
        authRegisterDrawerToggle(authModal);
    }, false);

    // const authReturnToRegisterButton = authModal.querySelector("#authReturnToRegisterButton");
    // authReturnToRegisterButton.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     authRegisterDrawerToggle(authModal);
    // }, false);

    const eyeBtns = authModal.querySelectorAll(".toggle-password");
    eyeBtns.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            passwordToggleView(authModal);
        }, false);
    });

    const registerPassword = authModal.querySelector("#register-password").querySelector("input");
    registerPassword.addEventListener("keyup", (e) => {
        e.preventDefault();
        evaluatePassword(authModal);
    });

    const registerRepeat = authModal.querySelector("#register-repeat").querySelector("input");
    registerRepeat.addEventListener("keyup", (e) => {
        e.preventDefault();
        passwordRepeat(authModal);
    });

    tabScroller();
});

const tabScroller = () => {
    const scroller = document.querySelector("#authPageScroll");
    const tabs = document.querySelector("#authTabs");
    const w = Math.min(window.innerWidth, 540);
    scroller.addEventListener("scroll", () => {
        scrollY = scroller.scrollLeft;
        if (scrollY > w * 0.5) {
            if (!tabs.children[1].classList.contains("is-active")) {
                tabs.children[1].classList.add("is-active");
                tabs.children[0].classList.remove("is-active");
            }
        } else {
            if (!tabs.children[0].classList.contains("is-active")) {
                tabs.children[0].classList.add("is-active");
                tabs.children[1].classList.remove("is-active");
            }
        };
    });
};

const toggleModal = (name) => {
    const modal = document.querySelector(`#${name}`);
    if (modal.classList.contains("is-active")) {
        animateCSS(modal, ".modal-card", "fadeOutDown");
        animateCSS(modal, ".modal-background", "fadeOut");
    } else {
        animateCSS(modal, ".modal-background", "fadeIn");
        animateCSS(modal, ".modal-card", "fadeInUp");
        modal.classList.add("is-active");
    }
};

const animateCSS = (modal, queryName, animationName, cb) => {
    const elem = modal.querySelector(queryName);
    elem.classList.add('animated', animationName);
    const handleAnimationEnd = () => {
        elem.classList.remove('animated', animationName);
        elem.removeEventListener('animationend', handleAnimationEnd);
        if (animationName === "fadeOut") {
            modal.classList.remove("is-active");
        }
        if (typeof cb === 'function') cb()
    }
    elem.addEventListener('animationend', handleAnimationEnd)
};

const setAuthTab = (name, parent) => {
    const component = document.querySelector(`#${parent}`);
    const tabs = component.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.classList.remove("is-active");
        if (tab.id === name) tab.classList.add("is-active");
    })
};

const authLoginDrawerToggle = (modal) => {
    const forgot = modal.querySelector("#forgotPasswordPanel");
    const login = modal.querySelector("#loginPanel");
    forgot.classList.toggle("hidden");
    login.classList.toggle("hidden");
};

const authRegisterDrawerToggle = (modal) => {
    const setPassword = modal.querySelector("#setPasswordPanel");
    const register = modal.querySelector("#registerPanel");
    setPassword.classList.toggle("hidden");
    register.classList.toggle("hidden");
};

const passwordToggleView = (modal) => {
    const eyeBtns = modal.querySelectorAll(".toggle-password");
    eyeBtns.forEach(password => {
        const inputName = password.attributes["toggle"].value;
        const input = modal.querySelector(inputName).querySelector("input");
        const attr = input.attributes["type"];
        if (attr.nodeValue === "password") {
            attr.nodeValue = "text";
        } else {
            attr.nodeValue = "password"
        }
        const icon = password.querySelector("svg");
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    });
};

const passwordRepeat = (modal) => {
    const password = modal.querySelector("#register-password");
    const repeat = modal.querySelector("#register-repeat");
    console.log(password, repeat);
};

const evaluatePassword = (modal) => {
    const registerPassword = modal.querySelector("#register-password").querySelector("input");
    const progress = modal.querySelector(".progress");
    const password = passwordScore(registerPassword.value);
    progress.attributes["value"].nodeValue = password.score;
    progress.classList.remove("is-danger", "is-warning", "is-info", "is-primary", "is-success");
    progress.classList.add(password.class);
};

