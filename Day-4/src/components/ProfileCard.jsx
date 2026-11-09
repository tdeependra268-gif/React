
import React from 'react';

export default function ProfileCard(userData) {

//    let userData = props;
    return(
        <div className="card">
            <img src={userData.imageUrl} alt="avatar" />
             <h2>{userData.userName}</h2>
            <h3>{userData.role}</h3>
            <button className="btn">View Profile</button>
        </div>
    )
}