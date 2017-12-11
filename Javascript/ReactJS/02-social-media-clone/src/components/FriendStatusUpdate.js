import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/FriendStatusUpdate.css';

class FriendStatusUpdate extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    //<div className="likesArea"> Likes: {this.props.likes} <button className="likeBtn"> Like </button></div>

    return (
      <div className="friend-status-update__info">
        <div id="friend-status-update__update">
          <div className="friend-status-update__face" style={{backgroundColor: this.props.color}}> {this.props.face} </div>
          <div className="friend-status-update__update_text">
            <h5> {this.props.name} </h5>
            {this.props.status}
          </div>
          <div>
            <div className="likesArea"> Likes: {this.props.likes} <button className="likeBtn"> Like </button></div>
          </div>
        </div>
      </div>
    );
  }
}

FriendStatusUpdate.propTypes = {
  name: PropTypes.string.isRequired,
  face: PropTypes.string.isRequired,
  status: PropTypes.string,
  color: PropTypes.string.isRequired,
  likes: PropTypes.number
};

export default FriendStatusUpdate;
