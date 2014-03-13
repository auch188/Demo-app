// Facebook routes -> router.js

var users = require('../routes/users');
//var Auth = require('../middlewares/authorization');

module.exports = function(app,passport){
  app.get('/', function(req, res){
  if(req.isAuthenticated()){
	res.render("home", { user : req.user}); 
  }
  else{
	res.render("home", { user : null});
  }
 });

  app.get("/login", function(req, res){ 
	res.render("login");
 });


//new code
/*
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log(req);
    app.post("/login" 
		,passport.authenticate('local',{
			successRedirect : "/profile",
			failureRedirect : "/login",
		})
	);

  });
//new code end
*/
/* Old code not working	
  app.post("/login",passport.authenticate('local',{
	successRedirect : "/profile",
	failureRedirect : "/"
  })
 );
*/ //Old code not working end
/*
  app.get("/signup", function (req, res) {
	res.render("signup");
 });
 app.post("/signup", Auth.userExist, function (req, res, next) {
 User.signup(req.body.email, req.body.password, function(err, user){
 if(err) throw err;
  req.login(user, function(err){
 if(err) return next(err);
  return res.redirect("profile");
     });
   });
  });
*/
  app.get('/users', users.list, function(){
  });
  app.get('/users/:id',users.show, function(){
  });
  app.post('/users/:id',users.edit, function(){
  });
  app.del('/users/:id',users.del, function(){
  });
  app.post('/users/:id/follow',users.follow, function(){
  });
  app.post('/users/:id/unfollow',users.unfollow, function(){
  });
}

/* Code from passport
var User = require('../app/models/user');
var Auth = require('./middlewares/authorization.js');

module.exports = function(app, passport){
	app.get("/", function(req, res){ 
		if(req.isAuthenticated()){
		  res.render("home", { user : req.user}); 
		}else{
			res.render("home", { user : null});
		}
	});

	app.get("/login", function(req, res){ 
		res.render("login");
	});

	app.post("/login" 
		,passport.authenticate('local',{
			successRedirect : "/",
			failureRedirect : "/login",
		})
	);

	app.get("/signup", function (req, res) {
		res.render("signup");
	});

	app.post("/signup", Auth.userExist, function (req, res, next) {
		User.signup(req.body.email, req.body.password, function(err, user){
			if(err) throw err;
			req.login(user, function(err){
				if(err) return next(err);
				return res.redirect("profile");
			});
		});
	});

	app.get("/auth/facebook", passport.authenticate("facebook",{ scope : "email"}));
	app.get("/auth/facebook/callback", 
		passport.authenticate("facebook",{ failureRedirect: '/login'}),
		function(req,res){
			res.render("profile", {user : req.user});
		}
	);

	app.get('/auth/google',
	  passport.authenticate(
	  	'google',
		  {
		  	scope: [
		  	'https://www.googleapis.com/auth/userinfo.profile',
		  	'https://www.googleapis.com/auth/userinfo.email'
		  	]
		  })
	  );

	app.get('/auth/google/callback', 
	  passport.authenticate('google', { failureRedirect: '/login' }),
	  function(req, res) {
	    // Successful authentication, redirect home.
	    res.redirect('/');
	  });

	app.get("/profile", Auth.isAuthenticated , function(req, res){ 
		res.render("profile", { user : req.user});
	});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/login');
	});
}
*/ // Code end
