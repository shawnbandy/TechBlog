const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds
    maxAge: 1000 * 60 * 10 , // expires after 10 minutes // 1000ms * 60 = 60s * 10 = 10min
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});


// // TODO: make the routes
// // TODO: make the seeding
// // TODO: make the handlebar pages
// // TODO: add user login functionality
// // TODO: Add a dashboard that show's all of your posts
// // TODO: Add a way to create a post once on the dashboard
// // TODO: add a date to each post
//TODO: allow an update for each post
// // TODO: allow to delete a post
// // TODO: have a comment feature on each post
//TODO: allow to delete a comment
//TODO: allow to update a comment
