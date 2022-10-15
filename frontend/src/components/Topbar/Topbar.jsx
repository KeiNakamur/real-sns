import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Topbar.css";
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">SNS</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <SearchIcon className="searchIcon" />
                    <input
                        type="text"
                        className="seachInput"
                        placeholder="type anything" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarItemIcons">
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarBadge">2</span>
                    </div>
                    <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
                </div>

            </div>
        </div >
    )
}