import React from 'react';
import { Bookmark, Home, MessageRounded, Notifications, Person, PersonPin, Search, Settings } from '@mui/icons-material';
import "../Sidebar/Sidebar.css";
import SidebarFriend from '../sidebarFriend/SidebarFriend';
import { Users } from "../../dummyData";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Home className="sidebarIcon" />
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            <span className="sidebarListItemText">ホーム</span>
                        </Link>
                    </li>

                    <li className="sidebarListItem">
                        <Search className="sidebarIcon" />
                        <span className="sidebarListItemText">検索
                        </span>
                    </li>

                    <li className="sidebarListItem">
                        <Notifications className="sidebarIcon" />
                        <span className="sidebarListItemText">通知
                        </span>
                    </li>

                    <li className="sidebarListItem">
                        <MessageRounded className="sidebarIcon" />
                        <span className="sidebarListItemText">メッセージ
                        </span>
                    </li>

                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">ブックマーク
                        </span>
                    </li>

                    <li className="sidebarListItem">
                        <Person className="sidebarIcon" />
                        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
                            <span className="sidebarListItemText">プロフィール
                            </span>
                        </Link>
                    </li>

                    <li className="sidebarListItem">
                        <Settings className="sidebarIcon" />
                        <span className="sidebarListItemText">設定
                        </span>
                    </li>
                </ul>
                <hr className='sidebarHR' />
                <ul className="sidebarFriendList">
                    {Users.map((user) => (
                        <SidebarFriend user={user} key={user.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

