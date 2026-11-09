
import React from 'react';

export default function ProfileCard(props) {

   let userData = props.userData;
    return(
        <div className="card">
            <img src={userData.imageUrl} alt="avatar" />
        <h2></h2>
            <h3></h3>
            <button className="btn">View Profile</button>
        </div>
    )
}