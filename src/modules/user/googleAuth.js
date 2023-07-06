const { authWithGoogle } = require("./service");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
// OAuth configuration

const googlePassport = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALL_BACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const response = await authWithGoogle(profile);
          return done(null, response);
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = googlePassport;
