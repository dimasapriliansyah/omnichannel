import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import produce from 'immer';
import { connect } from 'react-redux';

import { sendOutgoing } from '../../../../redux/actions/outgoing';

function ChatFooter({
  sessionId,
  from,
  fromName,
  username,
  loadingChat,
  sendOutgoing
}) {
  console.log('loadingChat', loadingChat);
  console.log('sessionId', sessionId);
  const [chatData, setchatData] = useState({
    message: '',
    messageType: 'text'
  });

  const { message, messageType } = chatData;
  const onChangeTextInput = e => {
    const nextState = produce(chatData, draftState => {
      draftState.message = e.target.value;
    });
    setchatData(nextState);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (messageType === 'text') {
      const convId = uuidv4();
      sendOutgoing({ sessionId, from, fromName, username, message, convId });
    }
  };
  return (
    <div className="chat-footer">
      {sessionId !== '' && !loadingChat && (
        <form onSubmit={e => onSubmit(e)}>
          <button className="btn btn-light btn-floating" type="button">
            <i className="fa fa-paperclip"></i>
          </button>
          <input
            type="text"
            className="form-control"
            name="message"
            value={message}
            onChange={e => onChangeTextInput(e)}
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
      )}
    </div>
  );
}

ChatFooter.propTypes = {
  sessionId: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  fromName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  loadingChat: PropTypes.bool.isRequired,
  sendOutgoing: PropTypes.func.isRequired
};

const mapStateToProps = ({ outgoing }) => ({ outgoing });

export default connect(mapStateToProps, { sendOutgoing })(ChatFooter);
