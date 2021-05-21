import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },

  address: String,
  city: String,
  state: String,
  zip: String,
  location: {
    latitude: String,
    longitude: String,
  },

  services: {
    walking: {
      active: Boolean,
      rate: Number,
    },
    boarding: {
      active: Boolean,
      rate: Number,
    },
    houseSitting: {
      active: Boolean,
      rate: Number,
    },
    dropInVisit: {
      active: Boolean,
      rate: Number,
    },
  },
  rating: Number,
  hasChildren: Boolean,
  // profileComments,
  profilePicture: String,
  profilePictureName: String,
  isActiveSitter: { type: Boolean, default: false },
  homeType: String,
  smokes: Boolean,
  petPreferencesSmall: Boolean,
  petPreferencesMedium: Boolean,
  petPreferencesLarge: Boolean,
  petPreferencesGiant: Boolean,

  aboutMe: String,
  headline: String,
  yearsOfExperience: Number,
  hasYard: Boolean,
});

const twentyMinutesInMiliseconds = 1200000;

userSchema.methods.generateTokens = function () {
  const accessToken = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: twentyMinutesInMiliseconds,
  });

  const refreshToken = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return { accessToken, refreshToken };
};

userSchema.methods.generateAccessToken = function () {
  const accessToken = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: twentyMinutesInMiliseconds,
  });

  return accessToken;
};

const User = mongoose.model("User", userSchema);

export default User;
