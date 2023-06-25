const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('username');
const loginPassword = document.getElementById('loginPassword');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = loginUsername.value;
    const password = loginPassword.value;

    const key = JSON.parse(localStorage.getItem('users'));

    if (username === '') {
        alert('Please fill out the username field.');
    } else if (password === '') {
        alert('Please fill out the password field.');
    } else if (key.username == username && key.password == password) {
        alert('Login successful!');
        window.location.href = 'member-page.html';
    } else {
        alert('Invalid username or password');
    }
});


const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');

registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.visibility = 'hidden';
    registrationForm.style.visibility = 'visible';
});

loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.visibility = 'visible';
    registrationForm.style.visibility = 'hidden';
});

const registrationForm = document.getElementById('registrationForm');
const regUsername = document.getElementById('regUsername');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = regUsername.value;
    const email = regEmail.value;
    const password = regPassword.value;

    if (username === '') {
        alert('Please fill out the username field.');
    } else if (email === '') {
        alert('Please fill out the email field.');
    } else if (password === '') {
        alert('Please fill out the password field.');
    } else {
        const newUser = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('users', JSON.stringify(newUser));
        
        alert('Registration successful!');

        loginForm.style.visibility = 'visible';
        registrationForm.style.visibility = 'hidden';
    }
});