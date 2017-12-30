import React from 'react';
import FriendStatusUpdate from './FriendStatusUpdate';

import '../styles/components/Feed.css';

class Feed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      feed: [{
        name: 'Nyan',
        face: '=^.^=',
        status: 'tote bag forage normcore edison bulb fixie gastropub etsy coloring book',
        color: 'teal',
        initialLikes: 5
      }, {
        name: 'Grumpy Hispter',
        face: 'ಠ~ಠ',
        status: 'Asymmetrical live-edge edison bulb synth scenester you probably haven\'t heard of them',
        color: 'mediumpurple',
        initialLikes: 5
      }, {
        name: 'Other Otter',
        face: '(ᵔᴥᵔ)',
        status: 'Unicorn portland man bun mumblecore direct trade four dollar toast',
        color: 'hotpink',
        initialLikes: 4
      }, {
        name: 'Crystal Gem',
        face: '◕.◕',
        status: 'Air plant swag messenger bag snackwave, mixtape blog fashion axe vice gluten-free keytar',
        color: 'cornflowerblue',
        initialLikes: 1
      }, {
        name: 'Polar Bear',
        face: 'ʕ•ᴥ•ʔ',
        status: 'Deep v shabby chic direct trade 90\'s pok pok',
        color: 'forestgreen',
        initialLikes: 1
      }]
    };
    this.updateStatus = this.updateStatus.bind(this);

  }

  updateStatus(e){
    e.preventDefault();
    let input = e.target.children[0];
    let newUpdate = {
      status: input.value,
      name: "Mr. Robot",
      face: "\\_(ʘ_ʘ)_/",
      color: "darkred",
      initialLikes: 0,
    };
    this.state.feed.unshift(newUpdate);
    this.setState({
        feed: this.state.feed
    }, function (newState) {
        input.value = "";
    });
  };

  render(){
    return(
      <div id="feed">
        <div className="feed__status">
        <div id="feed__status_icon">
          \_(ʘ_ʘ)_/
        </div>
           <div id="feed__input">
             <form onSubmit={this.updateStatus}>
               <input type="text" placeholder="What's Happening?"/>
               <button id="feed_update_btn" type='submit'> update </button>
             </form>
           </div>
        </div>
        <div className="feed__friend_updates">
          {this.state.feed.map((status, i) =>
              <FriendStatusUpdate
                  key={i}
                  name={status.name}
                  face={status.face}
                  status={status.status}
                  color={status.color}
                  initialLikes={status.initialLikes}
              />
          )}

        </div>
      </div>
    )
  }
}

export default Feed;

