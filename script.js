const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const wrapper = document.querySelector('.wrapper');
let username = document.getElementById('user');
let password = document.getElementById('password');


registerLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});








