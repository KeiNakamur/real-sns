//認証まわり(SignIn, Login)の実装

const router = require("express").Router();
const User = require("../models/User");

//ユーザー登録
router.post("/register", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//ログイン機能
router.post("/login", async (req, res) => {
  try {
    //findOne関数でemailをリクエスト内から探してくる
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("ユーザーが見つかりません。");

    //user.passwordのuserには、findOneで探してきたユーザー情報の一つ(後ほどパスワードをビークリプトライブラリ等を使用してハッシュ化させたい)
    const valiedPassword = req.body.password === user.password;
    if (!valiedPassword) return res.status(400).json("パスワードが違います");

    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// router.get("/", (req, res) => {
//   res.send("auth");
// });

module.exports = router;
