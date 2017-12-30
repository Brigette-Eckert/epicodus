import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/FriendStatusUpdate.css';

class FriendStatusUpdate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.initialLikes
    };
    this.likeStatus = this.likeStatus.bind(this);
  }

  likeStatus(){
    this.setState({
      likes: this.state.likes + 1
    });
  }
  render(){
    return (
      <div className="friend-status-update__info">
          <div id="friend-status-update__update">
            <div className="friend-status-update__face" style={{backgroundColor: this.props.color}}> {this.props.face} </div>
            <div className="friend-status-update__update_text">
              <h5> {this.props.name} </h5>
              {this.props.status}
            </div>
            <div>
              <div className="likesArea"> Likes: {this.state.likes} <button onClick={this.likeStatus} className="likeBtn"> Like </button></div>
            </div>
        </div>
        <hr/>
      </div>
    );
  }
}

FriendStatusUpdate.propTypes = {
  name: PropTypes.string.isRequired,
  face: PropTypes.string.isRequired,
  status: PropTypes.string,
  color: PropTypes.string.isRequired,
  initialLikes: PropTypes.number
};

export default FriendStatusUpdate;
