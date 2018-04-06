const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models');
require('./services/passport');
const passport = require('passport');
const cookieSession = require('cookie-session');

mongoose.connect(keys.mongoURI);

const app = express();

// Configure passsport middleware / cookie-session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5050;

app.listen(PORT);
