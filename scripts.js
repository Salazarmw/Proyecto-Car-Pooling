function registerUser(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
  
    if (!firstName || !lastName || !phone || !username || !password || !repeatPassword) {
      alert('All fields are required.');
      return;
    }
  
    if (password !== repeatPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === username);
  
    if (existingUser) {
      alert('Username already exists.');
      return;
    }
  
    const newUser = {
      firstName,
      lastName,
      phone,
      username,
      password
    };
  
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    window.location.href = './login.html';
  }
  