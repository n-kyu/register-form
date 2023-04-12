const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const openPopup = document.querySelector(".loginBtn-popup");
const closePopup = document.querySelector(".close-icon");

// button to open popup with login/register
openPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
});

// button to close the popup
closePopup.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});

// button to register
registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

// button to login
loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});
