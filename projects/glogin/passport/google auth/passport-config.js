// passport-config.js

import dotenv from 'dotenv';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from './models/User.js';
import bcrypt from 'bcryptjs';

dotenv.config();

export function initialize(passport) {
  // Define the local strategy
  const authenticateUser = async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'No user with that email' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Password incorrect' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  };

  passport.use(
    new LocalStrategy({ usernameField: 'email' }, authenticateUser)
  );


   // GOOGLE STRATEGY
   passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:  process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // const existingUser = await User.findOne({ googleId: profile.id });

      // if (existingUser) {
      //   return done(null, existingUser);
      // }


      const email = profile.emails[0].value;

      // 🔍 Check if user already exists by email
      let user = await User.findOne({ email });
  
      if (user) {
        // ✅ User exists — update googleId if not already set
        if (!user.googleId) {
          user.googleId = profile.id;
          await user.save();
        }
        return done(null, user);
      }











      // If new user, create one
      const newUser = new User({
        email: profile.emails[0].value,
        googleId: profile.id
      });

      await newUser.save();
      return done(null, newUser);
    } catch (err) {
      return done(err);
    }
  }));


  // Save user ID in session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Retrieve user from ID stored in session
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}

// console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
// console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);
// console.log('MONGO_URL:', process.env.MONGO_URL);