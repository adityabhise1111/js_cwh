const express = require('express');
const session = require('express-session');
const app = express();
const users = []; // We'll store registered users here temporarily


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false
  }));

app.get('/', (req, res) => {
  res.redirect('/home');
});


app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const { email, password } = req.body;
  
    // Check if user already exists
    const exists = users.find(user => user.email === email);
    if (exists) {
      return res.send('User already exists!');
    }
  
    // Add new user
    users.push({ email, password });
    
    res.redirect('/login'); // Redirect to login page after registration
  });

  app.get('/home', (req, res) => {
    if (!req.session.userId) {
      return res.redirect('/register'); // Redirect to register page if not logged in
    }
    res.render('home'); // Render home page if logged in
  });

  app.get('/login', (req, res) => {
    res.render('login');
  });
  // POST /login route to handle login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = users.find(user => user.email === email);

    if (!user) {
        return res.send('User not found!');
    }

    // Check if the password matches
    if (user.password !== password) {
        return res.send('Incorrect password!');
    }

    // If the credentials are correct, save the user ID to the session
    req.session.userId = user.email;

    // Redirect to home page after successful login
    res.redirect('/home');
});
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.send('Error logging out');
      }
      res.redirect('/login'); // Redirect to login page after logout
    });
  });
  

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
