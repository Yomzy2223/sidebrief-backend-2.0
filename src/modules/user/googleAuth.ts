import { authWithGoogle, authLogin } from "./service";

const GoogleStrategy = require("passport-google-oauth20").Strategy;
// OAuth configuration

const googlePassport = (passport: any) => {
  passport.use(
    "google-signup",
    new GoogleStrategy(
      {
        clientID:
          "52697745344-6179jfeeam85r03m1ls84p818hicuqvj.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALL_BACK_URL,
      },

      async (accessToken: any, refreshToken: any, profile: any, done: any) => {
        console.log("chccccccc", profile);
        try {
          const response = await authWithGoogle(profile);
          console.log("ressponse", response);
          return done(null, response);
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  passport.serializeUser((user: any, done: any) => {
    done(null, user);
  });

  passport.deserializeUser((obj: any, done: any) => {
    done(null, obj);
  });
};

export default googlePassport;
