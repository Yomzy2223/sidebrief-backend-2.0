const { PrismaClient } = require("@prisma/client");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const prisma = new PrismaClient();
// OAuth configuration
console.log(process.env.GOOGLE_CALL_BACK_URL)
console.log(process.env.GOOGLE_CLIENT_SECRET)
console.log(process.env.GOOGLE_CLIENT_ID)

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALL_BACK_URL,
      passReqToCallback: true, //
    },
    (accessToken, refreshToken, profile, done) => {
      try {

        let user = await prisma.user.findUnique({
            where: { email: userPayload.email.toLowerCase() },
          })
          if (user !== null) {
            done(null, user);
            return { error: "User with this email already exists", statusCode: 400 };
          } else {
          
          console.log(profile)
          
          }


      } catch (error) {
        console.log(error);
      }
    }
    //     console.log("trying to access google")
    //   let userProfile = profile;
    //   return done(null, userProfile);
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
