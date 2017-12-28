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
    }

  }

  updateStatus(e){
    // let newUpdate = {
    //  status: ~~e.target.html,
  //    name: "Mr. Robot"
    //  face: "\_(ʘ_ʘ)_/"
    //   color: "darkred"
    // initialLikes: 0
    // ...
    // };
    this.setState({
      // feed: this.setState.feed.push({})
    })
  }

  render(){
    return(
      <div id="feed">
        <div className="feed__status">
        <div id="feed__status_icon">
          \_(ʘ_ʘ)_/
        </div>
           <div id="feed__input">
             <input type="text" placeholder="What's Happening?"/>
           </div>
        </div>
        <div className="feed__friend_updates">
          {['a', 'b', 'c'].map((item) =>
            <div>{item}</div>
          )}
          <FriendStatusUpdate
            name="Nyan"
            face="=^.^="
            status="tote bag forage normcore edison bulb fixie gastropub etsy coloring book"
            color="teal"
            initialLikes={5}
          />
          <hr/>
          <FriendStatusUpdate
            name="Grumpy Hispter"
            face="ಠ~ಠ"
            status="Asymmetrical live-edge edison bulb synth scenester you probably haven't heard of them"
            color="mediumpurple"
            initialLikes={1}
          />
          <hr/>
          <FriendStatusUpdate
            name="Other Otter"
            face="(ᵔᴥᵔ)"
            status="Unicorn portland man bun mumblecore direct trade four dollar toast"
            color="hotpink"
            initialLikes={15}
          />
          <hr/>
          <FriendStatusUpdate
            name="Crystal Gem"
            face="◕.◕"
            status="Air plant swag messenger bag snackwave, mixtape blog fashion axe vice gluten-free keytar"
            color="cornflowerblue"
            initialLikes={7}
          />
          <hr/>
          <FriendStatusUpdate
            name ="Polar Bear"
            face ="ʕ•ᴥ•ʔ"
            status="Deep v shabby chic direct trade 90's pok pok"
            color="forestgreen"
            initialLikes={3}
          />
        </div>
      </div>
    )
  }
}

export default Feed;

