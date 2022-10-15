const mongoose = require("mongoose");

//必要なデータを記述
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      required: true,
      type: String,
      min: 6,
      max: 50,
    },
    profilePicture: {
      //画像のパスのため、string型
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 100,
    },
    city: {
      type: String,
      max: 50,
    },
  },
  //データを格納した日付と時間を自動的に格納できる
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
