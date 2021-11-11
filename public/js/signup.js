const signupFormHandler = async function(event) {
    event.preventDefault();

    const emailEl = document.querySelector('#email-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
    const usernameEl = document.querySelector('#username-input-signup')

    const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({
            email: emailEl.value,
            password: passwordEl.value,
            username: usernameEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Failed to sign up');
    }
};

document
    .querySelector('#signupform')
    .addEventListener('submit', signupFormHandler);