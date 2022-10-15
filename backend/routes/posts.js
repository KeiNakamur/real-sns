const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//投稿を作成する
router.post("/", async (req, res) => {
  //作成するのでインスタンス化する必要あり
  const newPost = new Post(req.body);
  try {
    //インスタンス化したものをsaveする必要があることを忘れずに
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//投稿を編集する
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //自分が自身の投稿のみ編集することが可能なので
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json("投稿編集に成功しました");
    } else {
      return res.status(403).json("他人の編集権限がありません");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

//投稿を削除する
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //自分自身の投稿しか削除できない
    if (post.userId === req.body.userId) {
      await post.deleteOne();
    }
    return res.status(200).json("投稿を削除しました");
  } catch (err) {
    return res.status(403).json("自身の投稿のみ削除できます");
  }
});

//特定の投稿を取得する
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //自分自身の投稿しか削除できない
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json("自身の投稿のみ削除できます");
  }
});

//特定の投稿に対して「いいね」機能を実装
router.put("/:id/like", async (req, res) => {
  try {
    //フォローする場合、自分自身のユーザー情報、相手の情報が必要
    const post = await Post.findById(req.params.id);

    //まだ投稿にいいねが押されていなかったらいいねを押す
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        //$pushは配列にpush(要素を追加していく)
        $push: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("投稿にいいねを押しました");
      //ここでのelseは、既に投稿にいいねが押されていた場合
    } else {
      //いいねしているuserIdを取り除く
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(403).json("あなたは既にいいねを取り除きました");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

//タイムラインの取得(自分がフォローしている相手の投稿のみを取得)
router.get("/timeline/:userId", async (req, res) => {
  try {
    //どの人が投稿したのかを判別するためにuserSchemaを利用する
    const currentUser = await User.findById(req.params.userId);
    //currentUserで取得した人のpost内容をfind()で全て取得(userSchemaのuserIdとpostSchemaでのuserIdを照らし合わせている)
    const userPosts = await Post.find({ userId: currentUser._id });

    //自分がフォローしている投稿内容を取得する
    const friendsPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        //userIdに全ての要素を取得してreturnで返す
        return Post.find({ userId: friendId });
      })
    );
    //concat()は組み合わせる時に使用する関数
    return res.status(200).json(userPosts.concat(...friendsPosts));
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
