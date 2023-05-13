import React from 'react';
import Stat from './stat';
import "./profile-card.scss"
const ProfileCard = (props) => {
    const { avatar, name, location, shot, followers, following } = props;
    const image = require(`../../assets/img/${avatar}`);
    const profilBg = { backgroundImage: `url(${image})` };
    return (
        <div className='profile-card'>
            <div className="header" style={ profilBg}></div>
            <div className="content">
                <div className="avatar" style={ profilBg }></div>
                <h2>{props.name}</h2>
                <h4>{props.location}</h4>
                <div className="stats">
                    <Stat name="Shot" value={shot}></Stat>
                    <Stat name="Followers" value={followers}></Stat>
                    <Stat name="Following" value={following}></Stat>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard