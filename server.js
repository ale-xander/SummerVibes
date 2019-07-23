const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 4000;

// DATABASE 

const db = {
  User: require('./models/Customer'),
};

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
  console.log('REQ SESSION = ', req.session);
  next();
});

// BODY PARSER MIDDLEWARE 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SERVE PUBLIC DIRECTORY 

app.use(express.static(`${__dirname}/public`));

// ------------------------------------------ROUTES --------------------------------//



// ---------------------------------------HTML ENDPOINTS-----------------------------//

app.get('/', (req, res) => {
  // res.send('<h1>Welcome Summer Vibes</h1>');
  // res.sendFile(`${__dirname}/views/index.html`);
  res.render('index');
});


// ACCOUNTS ROUTES 

// app.use('/accounts', routes.account);
// Profiles Route
// app.use('/profile', routes.profile);

// -------------------------------------------API ENDPOINTS--------------------------// 
app.get('/api/v1/users', (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if (err) return res.json({ status: 400, error: err });
    res.json({ status: 200, data: allUsers });
  });
});

app.get('/api/v1/test', (req, res) => {
  // const q = db.User.where('likes').lte(5);
  const q = db.User.where('name').equals('Test Person2');
  q.then(data => res.json({ status: 200, data: data }))
    .catch(err => res.json({ status: 400, error: err }));
});




//------------------------------------------START SERVER ----------------------------//

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)); 