import React from 'react';

const SidebarFriend = ({ user }) => {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className='sidebarFriendImg' />
            <span className='sidebarFriendName'>{user.username}</span>
        </li>
    )
}

export default SidebarFriend;