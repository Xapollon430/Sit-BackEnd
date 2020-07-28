"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _email;

var ownerSchema = _mongoose["default"].Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: (_email = {
    type: String,
    required: true,
    trim: true
  }, (0, _defineProperty2["default"])(_email, "trim", true), (0, _defineProperty2["default"])(_email, "lowercase", true), _email),
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  animals: [{
    kind: String,
    weight: String
  }],
  picture: String
});

ownerSchema.methods.generateAuthToken = function () {
  var token = _jsonwebtoken["default"].sign({
    _id: this._id.toString()
  }, process.env.JWT_SECRET, {
    expiresIn: "10000"
  });

  return token;
};

var Owner = _mongoose["default"].model("Owner", ownerSchema);

var _default = Owner;
exports["default"] = _default;