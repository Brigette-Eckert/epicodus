import React from 'react';

import '../styles/components/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <button className="Navbar__home_btn">Home</button>
        <button className="Navbar__notifications_btn">Notifications</button>
        <button className="Navbar__messages_btn">Messages</button>
        <input className="Navbar__search" type="text" placeholder="Search"/>
        <button className="Navbar__tweet_btn">Tweet</button>
        <hr/>
      </div>
    );
  }

}

export default Navbar;