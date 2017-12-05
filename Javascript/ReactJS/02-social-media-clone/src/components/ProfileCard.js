import React from 'react';

import '../styles/components/ProfileCard.css';

class ProfileCard extends React.Component {
  render() {
    let profile = this.props.profile;

    return(
      <div id="profile-card">
        <div className="profile-card__header"></div>
        <div className="profile-card__image">
           O
          <br/>
          /|\
          <br/>
          /\
        </div>
        <div className="profile-card__name">{profile.name}</div>
        <div className="profile-card__stats">
          <div className="profile-card__tweets"> Tweets </div>
          <div className="profile-card__following"> Following </div>
          <div className="profile-card__followers"> Followers </div>
          <br/>
          <div className="profile-card__num"> {profile.tweets} </div>
          <div className="profile-card__num"> {profile.following}  </div>
          <div className="profile-card__num"> {profile.followers}  </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;