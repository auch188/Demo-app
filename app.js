// Facebook app.js file
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  ,neo4j = require('neo4j')
  ,passport = require("passport")
  ,flash = require("connect-flash")
  , util = require('util')
  , LocalStrategy = require('passport-local').Strategy
  
/*
//copied from models -> user.js
var db = new neo4j.GraphDatabase(
    process.env['NEO4J_URL'] ||
    process.env['GRAPHENEDB_URL'] ||
    'http://localhost:7474'
);
//copy end
*/

var app = express();

// all environments
app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.methodOverride());
  app.use(flash());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
  
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.locals({
    title: 'Facebook Demo App'    // default title
});

//copied from passport
app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.render('500', { error: err });
});

app.use(function(req, res, next){
  res.status(404);
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});
//copy end
	
/* Old code
// Routes

app.get('/', routes.site.home);

app.get('/users', routes.users.list);
app.post('/users', routes.users.create);
app.get('/users/:id', routes.users.show);
app.post('/users/:id', routes.users.edit);
app.del('/users/:id', routes.users.del);

app.post('/users/:id/follow', routes.users.follow);
app.post('/users/:id/unfollow', routes.users.unfollow);
*/ // Old code end
/*
//Test code
passport.use(new LocalStrategy(
  function(username, password, done) {
  User.findOne({ username: username }, function (err, user) {
   if (err) { return done(err); }
   if (!user) { return done(null, false, { message: 'Incorrect username.'}); }
   if(!user.validPassword(password) {
     return done(null, false, {message: 'Incorrect password'}); }
  return done(null, user); });
 }
});
//Test code end
*/

//code copied from Facebook's passport.js
passport.serializeUser(function(user, done) {done(null, User.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }, function (err, user) {
   done(err, User);
 });
});
passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
    },
    function(email, password, done) {
    	User.isValidUserPassword(email, password, done);
}));
console.log('this is the');
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    app.post("/login" 
		,passport.authenticate('local',{
			successRedirect : "/profile",
			failureRedirect : "/login",
		})
	);

  });

//code end


require('./routes/router')(app, passport); //(app, passport);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening at: http://localhost:%d/', app.get('port'));
});
