const loginHandler = async (event) => {
  console.log('login');
  event.preventDefault();

  const username = document.querySelector('#usernameLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();

  console.log(password);
  console.log(username);

  if (username && password) {
    const res = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const signUp = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#usernameCreate').value.trim();
  const password = document.querySelector('#passwordCreate').value.trim();

  console.log(password);
  console.log(username);

  if (username && password) {
    const reso = await fetch('/api/users/create', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(reso);

    if (reso.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  }
};

document.querySelector('#loginForm').addEventListener('submit', loginHandler);

document.querySelector('#loginCreate').addEventListener('submit', signUp);
