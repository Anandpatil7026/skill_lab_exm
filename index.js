const express = require("express")
const app = express()
const port=5000;
const mongodb=require("./Db");
mongodb();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  next();
})



// const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.use(new GoogleStrategy({
  clientID: '790304429707-62fianpc58ls6lll7h2m8nbug2m8ui76.apps.googleusercontent.com',
  clientSecret: 'http://localhost:5000/auth/google/callback',
  callbackURL: 'http://localhost:5000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Use the profile information (e.g., profile.id, profile.emails, etc.) to create or update a user in your database
  // For example, you could do something like this:
  // User.findOrCreate({ googleId: profile.id, email: profile.emails[0].value }, function (err, user) {
  //   return done(err, user);
  // });
}));

// Serialize the user for the session
passport.serializeUser(function (user, done) {
  done(null, user);
});

// Deserialize the user from the session
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Set up the authentication route
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

// Set up the callback route
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// Start the server
app.use(express.json());
app.use('/api',require("./Routes/Createuser"));
app.use('/api',require("./Routes/Senddata"));
app.use('/api',require("./Addblog"));
app.get('/',(req,res)=>{
  res.send("hello anand")
})
app.listen(port,()=> console.log(`server running at {port}`));
