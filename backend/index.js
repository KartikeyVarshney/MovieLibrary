const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
require('./config/passport')(passport);
const app = express();
app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/auth')
.then(()=>{
    console.log('Database connected.')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})


app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);


