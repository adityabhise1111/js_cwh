// passport-config.js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
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