import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <button>Home</button>
        <button>Notifications</button>
        <button>Messages</button>
        <input type="text"/>
        <button>Tweet</button>
        <hr/>
      </div>
    );
  }
}

export default Navbar;