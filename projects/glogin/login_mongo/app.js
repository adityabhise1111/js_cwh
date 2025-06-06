const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');  // Import mongoose for MongoDB
const bodyParser = require('body-parser');  // To parse form data
const app = express();
const port = 3000
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

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(session({
//     secret: 'secretkey',
//     resave: false,
//     saveUninitialized: false
//   })); saves in memory, not in mongoDB
// Middleware to serve static files (like CSS, JS, etc.)

app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL, // uses your existing MongoDB connection string
    collectionName: 'sessions'       // optional: name of the collection in MongoDB
  })
}));

app.get('/', (req, res) => {
  res.redirect('/home');
});


app.get('/register', (req, res) => {
    res.render('register');
});



app.post('/register', 
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(errors.array().map(err => err.msg).join('<br>'));
    }

    const { email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.send('User already exists!');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    
    res.redirect('/login');
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
    req.session.userId = user._id.toString();

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
  
z
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
