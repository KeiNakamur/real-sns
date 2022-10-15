import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Timeline from '../../components/Timeline/Timeline';
import Rightbar from '../../components/Rightbar/Rightbar';
import "./Profile.css";


const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar className="profileSidebar" />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" alt="" className='profileCoverImg' />
                            <img src="assets/person/1.jpeg" alt="" className='profileUserImage' />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Nakamura</h4>
                            <span className='profileInfoDesc'>Reactを勉強中</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Timeline />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;