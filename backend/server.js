const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors({ origin: "http://localhost:3000" }));
//データベース接続
mongoose
  //.envファイルに記載した変数を使用するにはimportと以下の書き方(.envをgitignoreに格納することを忘れずに...)
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBと接続中...");
  })
  .catch((err) => {
    console.log(err);
  });

//ミドルウェア
// route/user.jsは全てjson形式で取り扱っているので、json形式で扱うことを伝える必要がある
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

//reqでクライアントから受け取り、resでクライアントへ返す=>コールバック関数(routes/users.jsへ)
// app.get("/", (req, res) => {
//   res.send("Hello express");
// });

// app.get("/users", (req, res) => {
//   res.send("users");
// });

app.listen(PORT, console.log("server is running"));
