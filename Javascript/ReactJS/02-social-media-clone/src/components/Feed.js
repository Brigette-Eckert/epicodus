import React from 'react';
import FriendStatusUpdate from './FriendStatusUpdate';

import '../styles/components/Feed.css';

class Feed extends React.Component{
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
          <FriendStatusUpdate
            name="Nyan"
            face="=^.^="
            status="tote bag forage normcore edison bulb fixie gastropub etsy coloring book"
            color="teal"
            likes={5}
          />
          <hr/>
          <FriendStatusUpdate
            name="Grumpy Hispter"
            face="ಠ~ಠ"
            status="Asymmetrical live-edge edison bulb synth scenester you probably haven't heard of them"
            color="mediumpurple"
            likes={1}
          />
          <hr/>
          <FriendStatusUpdate
            name="Other Otter"
            face="(ᵔᴥᵔ)"
            status="Unicorn portland man bun mumblecore direct trade four dollar toast"
            color="hotpink"
            likes={15}
          />
          <hr/>
          <FriendStatusUpdate
            name="Crystal Gem"
            face="◕.◕"
            status="Air plant swag messenger bag snackwave, mixtape blog fashion axe vice gluten-free keytar"
            color="cornflowerblue"
            likes={7}
            canLike={true}
          />
          <hr/>
          <FriendStatusUpdate
            name ="Polar Bear"
            face ="ʕ•ᴥ•ʔ"
            status="Deep v shabby chic direct trade 90's pok pok"
            color="forestgreen"
            likes={3}
          />
        </div>
      </div>
    )
  }
}

export default Feed;

