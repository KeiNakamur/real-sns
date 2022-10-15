const router = require("express").Router();
const User = require("../models/User");

//CRUD(Create Read Update Delete)操作
//ユーザー情報の作成->auth.jsで既に実装済み

//ユーザー情報の更新API
//どのユーザーの情報を更新するかを判別するため、"/:id"
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      //findByIdAndUpdate関数はmongooseで用意されている関数で、ユーザーをidで探し、そのユーザーを更新することができる
      const user = await User.findByIdAndUpdate(req.params.id, {
        //$setは全てのパラメータ(userSchemaの全てのパラメータのこと)
        //つまりidがあっている場合、ユーザー情報の全てを更新することができる
        $set: req.body,
      });
      res.status(200).json("ユーザー情報が更新されました");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("自身のアカウントのみ更新できます");
  }
});

//ユーザー情報の削除API
//どのユーザーを削除するのかを判別するために、"/:id"
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      //findByIdAndUpdate関数はmongooseで用意されている関数で、ユーザーをidで探し、そのユーザーを更新することができる
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("ユーザー情報が削除されました");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("自身のアカウントのみ削除できます");
  }
});

//ユーザー情報の取得(twitterで言うとタイムラインの表示等)API
router.get("/:id", async (req, res) => {
  try {
    //findByIdAndUpdate関数はmongooseで用意されている関数で、ユーザーをidで探し、そのユーザーを更新することができる
    const user = await User.findById(req.params.id);
    //password, updateAtは見られてはまずいので、それ以外の要素をotherとして指定してresを返す
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//ユーザーのフォローするAPI(フォローする、フォローを外すことで情報が更新されるのでここではputメソッドを使用)
router.put("/:id/follow", async (req, res) => {
  //userIdは自分自身のidで、req.params.idはこれからフォローする相手のid
  //これらが等しくない場合のみフォローすることができるように実装
  if (req.body.userId !== req.params.id) {
    try {
      //フォローする場合、自分自身のユーザー情報、相手の情報が必要
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      //includes関数は配列のみに使用可能
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          //$pushは配列にpush(要素を追加していく)
          $push: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $push: {
            followers: req.params.id,
          },
        });
        return res.status(200).json("フォローしました");
      } else {
        return res
          .status(403)
          .json("あなたは既にこのユーザーをフォローしています");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自分自身をフォローできません");
  }
});

//ユーザーのフォローを外すAPI
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      //フォローする場合、自分自身のユーザー情報、相手の情報が必要
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      //includes関数は配列のみに使用可能
      //フォロワーに存在したらフォローを外せる
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({
          //今回はフォローを外す(followers配列から外す)ので、$pull
          $pull: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $pull: {
            followers: req.params.id,
          },
        });
        return res.status(200).json("フォロー解除しました。");
      } else {
        return res
          .status(403)
          .json("あなたは既にこのユーザーをフォロー解除しています。");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自分自身をフォロー解除できません。");
  }
});

module.exports = router;
