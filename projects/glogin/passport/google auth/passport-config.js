// passport-config.js

import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from './models/User.js';
import bcrypt from 'bcryptjs';


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
    clientID: "11705801686-n8mlm6cpl07ovi39a9uqg3bhvchsfs9q.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
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