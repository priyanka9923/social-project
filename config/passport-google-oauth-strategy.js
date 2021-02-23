const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User =require('../models/user');

//tell passport to use a new strategy for google login
passport.use(new googleStrategy({
    clientID:"860654373415-o2isbaqr58sjcq7p0i46dceck86qf3tt.apps.googleusercontent.com",
    clientSecret:"IL83o8xDnLq1BKAevN18W-Sq",
    callbackURL:"http://localhost:9000/users/auth/google/callback",
    },

    function(accessToken, refreshToken,profile, done){
        //find a user
        User.findOne({email:profile.emails[0].value}).exec(function(err,user){
            if (err){console.log('error in google strategy-passport,err');return}

            console.log(profile);
            if (user){
               // if found set it as req.user
                return done(null,user);
            }else{
                User.create({
                    name: profile.displayName,
                    email:profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                },function(err, user){
                    if(err){console.log('error in creating user google strategy-passport',err);return;}

                    return done(null,user);
                
                });
            }
        })
    }
))