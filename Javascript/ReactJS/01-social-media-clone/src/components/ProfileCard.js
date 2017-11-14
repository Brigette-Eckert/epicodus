import React from 'react';

import '../styles/components/ProfileCard.css';

class ProfileCard extends React.Component {
  render() {
    return(
      <div id="profile-card">
        <div className="profile-card__header"></div>
        <div className="profile-card__image">Pic</div>
        <div className="profile-card__name">Kellie A. Corrigan</div>
        <div className="profile-card__stats">
          <div className="profile-card__tweets"> Tweets </div>
          <div className="profile-card__following"> Following </div>
          <div className="profile-card__followers"> Followers </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;