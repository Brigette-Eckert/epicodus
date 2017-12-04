import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/FeedStatus.css';

function FeedStatus(props){
  return (
  <div className="feed__friend_status">
    <div id="feed__update">
      <div className="feed__face" style={{backgroundColor: props.color}}> {props.face} </div>
      <div className="feed__update_text">
        <h5> {props.name} </h5>
        {props.status}
      </div>
    </div>
  </div>
  );
}

FeedStatus.propTypes = {
  name: PropTypes.string.isRequired,
  face: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default FeedStatus;
