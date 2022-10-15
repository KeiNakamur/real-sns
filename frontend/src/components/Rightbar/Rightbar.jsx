import React from "react";
import "./Rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

//Home.jsxとProfile.jsxでpropsでprofileを付与し、profile変数があるかないかで
//cssをかき、見た目を変てる
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="/assets/post/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img src="/assets/post/event.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img src="/assets/post/2.jpeg" alt="" className="rightbarPromotionImg" />
        <p className="promotionName">ショッピング</p>

        <img src="/assets/post/2.jpeg" alt="" className="rightbarPromotionImg" />
        <p className="promotionName">hogehoge高校</p>

        <img src="/assets/post/2.jpeg" alt="" className="rightbarPromotionImg" />
        <p className="promotionName">Nakamura株式会社</p>
      </>
    )
  }

  const ProfileRightBar = () => {
    return <>
      <h4 className="rightbarTitle">ユーザー情報</h4>
      <div className="rightbarInfo">
        <div className="rightbarItemInfo">
          <span className="rightbarInfoKey">出身：</span>
          <span className="rightbarInfoKey">栃木</span>
        </div>

        <h4 className="rightbarTitle">あなたの友達</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Nakamura</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Tanaka</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Yu</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">chobechobe</span>
          </div>

        </div>
      </div>
    </>;
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* profileを受け取っている場合はprofileRightbarを、受け取っていない場合はHomeRightbarを */}
        {profile ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

