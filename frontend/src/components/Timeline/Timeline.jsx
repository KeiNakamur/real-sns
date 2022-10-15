import React, { useState } from "react";
import "../Timeline/Timeline.css";
import Share from "../share/Share";
import Post from "../Post/post";
import { useEffect } from "react";
//import { Posts } from "../../dummyData";
import axios from "axios";

const Timeline = () => {
  //APIを叩く処理(axiosライブラリを使用)
  const [posts, setPosts] = useState([]);

  //投稿内容はページがレンダリングされた際に飲み読み込めば良いので、
  //useEffectの第二引数は空の配列を用意
  //また非同期処理でデータを取得する必要があるので、async awaitを記述する必要あり
  //※useEffectではasync awaitが使用できないので、useEffect内でもう一つ関数を用意する必要がある
  useEffect(() => {

    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/6346a7ea01637b5b7b22d006"
      );
      console.log(response);
      setPosts(response);
    }
    fetchPosts();
  }, []);

  return <div className="timeline">
    <div className="timelineWrapper">
      <Share />
      {/* ここのPostsはdummyData内のPostsデータ一覧
      {/* {Posts.map((post) => ( */}
      {/* // propsとしてpostという名前でdummyDataの中身を渡す
        <Post post={post} key={post.id} />
      ))}  */}

      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  </div>;
};

export default Timeline;
