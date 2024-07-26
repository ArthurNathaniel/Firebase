document.getElementById('registerBtn').addEventListener('click', function() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registered
        console.log('User registered:', userCredential.user);
        alert('User registered successfully');
      })
      .catch((error) => {
        console.error('Error registering:', error.message);
        alert('Error registering: ' + error.message);
      });
  });
  
  document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Logged in
        console.log('User logged in:', userCredential.user);
        alert('User logged in successfully');
        window.location.href = 'home.html'; // Redirect to home.html
      })
      .catch((error) => {
        console.error('Error logging in:', error.message);
        alert('Error logging in: ' + error.message);
      });
  });
  