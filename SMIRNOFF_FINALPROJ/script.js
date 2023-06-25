const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('username');
const loginPassword = document.getElementById('loginPassword');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = loginUsername.value;
    const password = loginPassword.value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = storedUsers.find(user => user.username === username && user.password === password);

    if (username === '') {
        alert('Please fill out the username field.');
    } else if (password === '') {
        alert('Please fill out the password field.');
    } else if (matchedUser) {
        alert('Login successful!');
        window.location.href = 'Home.html';
    } else {
        alert('Invalid username or password');
    }
});


const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');

registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
});

loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'block';
    registrationForm.style.display = 'none';
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

        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        
        alert('Registration successful!');

        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
    }
});