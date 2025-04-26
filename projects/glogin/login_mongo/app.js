const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');  // Import mongoose for MongoDB
const bodyParser = require('body-parser');  // To parse form data
const app = express();
//const users = []; // We'll store registered users here temporarily


// MongoDB connection (replace with your MongoDB URI)
mongoose.connect('mongourl', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false })); // Middleware to parse form data
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

app.post('/register', async(req, res) => {
    const { email, password } = req.body;
  
    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.send('User already exists!');
    }
  
     // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds

  // Save user with hashed password
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();
    
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
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.send('User not found!');
    }
  
    // Compare plain password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send('Incorrect password!');
    }
  
    // If matched, create session
    req.session.userId = user.email;
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
