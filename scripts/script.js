const header = document.querySelector("header");
const form = document.querySelector("#signUpForm");
const footer = document.querySelector("footer");
footer.style.height = `${document.body.clientHeight - form.clientHeight - header.clientHeight}px`;