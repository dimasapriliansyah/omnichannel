import React from 'react';
import PropTypes from 'prop-types';

function ChatFooter(props) {
  const onSubmit = e => {
    e.preventDefault();
    console.log('onSubmit');
  };
  return (
    <div className="chat-footer">
      <form onSubmit={e => onSubmit(e)}>
        <button className="btn btn-light btn-floating" type="button">
          <i className="fa fa-paperclip"></i>
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Type your message here......"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="form-buttons">
          <button className="btn btn-primary btn-floating" type="submit">
            <i className="fa fa-send"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

ChatFooter.propTypes = {};

export default ChatFooter;
