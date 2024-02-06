const loginFormHandler = async function (event) {
  event.preventDefault();

  // Collect values from the login form
  const user = document.querySelector('#username-input-login').value.trim();
  const password = document.querySelector('#password-input-login').value.trim();

  // Send a POST request to the API endpoint
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: user,
      password: password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the dashboard
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);