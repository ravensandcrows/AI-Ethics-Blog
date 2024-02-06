const joinHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-join').value.trim();
    const passwordEl = document.querySelector('#password-input-join').value.trim();

    if (passwordEl.length >= 8 && usernameEl) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameEl,
                password: passwordEl,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to join');
        }
    } else {
        alert(
            'Please include both a username and password that is at least 8 characters long'
        );
    }
};

document.querySelector('#join-form').addEventListener('submit', joinHandler);
