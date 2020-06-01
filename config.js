const facebookURL = `https://localhost:5000/facebook/callback`;

exports.SESSION_SECRET = process.env.SESSION_SECRET;

exports.CLIENT_ORIGIN = process.env.NODE_ENV === "https://localhost:3000";

exports.FACEBOOK_CONFIG = {
  clientID: process.env.FACEBOOK_KEY,
  clientSecret: process.env.FACEBOOK_SECRET,
  profileFields: ["id", "emails", "name", "picture.width(250)"],
  callbackURL: facebookURL,
};
