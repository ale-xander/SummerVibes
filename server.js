const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 4000;

// DATABASE 

const db = require('./models');

// ROUTES 

const routes = require('./routes');

// EJS VIEW ENGINE

app.set('view engine', 'ejs');

//-------------------------------------MIDDLEWARE-----------------------------------// 

// EXPRESS SESSIONS 

app.use(session({
  secret: 'This secret can be anything you want. It is used to encryp the session object',
  resave: false,
  saveUninitialized: false,
}));

app.use((req, res, next) => {
  console.log('User = ', req.session.currentUser);
  next();
});

// BODY PARSER MIDDLEWARE 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SERVE PUBLIC DIRECTORY 

app.use(express.static(`${__dirname}/public`));

// ------------------------------------------ROUTES --------------------------------//

app.use('/accounts', routes.account);
app.use('/profile', routes.profile);
app.use('/shop', routes.shop);

// ---------------------------------------HTML ENDPOINTS-----------------------------//

app.get('/', (req, res) => {
  res.render('index', {
    user: req.session.currentUser
  });
});

// ---------------------------------------API ENDPOINTS-----------------------------//

app.post('/api/items', (req, res) => {
  db.Item.create(req.body).then(item => {
    res.json({
      stats: 200,
      data: item
    });
  }).catch*=(err => {
    res.json({
      status: 500,
      err
    });
  });
});

//------------------------------------------START SERVER ----------------------------//

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)); 