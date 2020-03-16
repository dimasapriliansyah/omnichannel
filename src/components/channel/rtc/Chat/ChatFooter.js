import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import produce from 'immer';
import { connect } from 'react-redux';

import {
  sendOutgoing,
  sendOutgoingMedia
} from '../../../../redux/actions/outgoing';

import ModalMedia from './ModalMedia';

function ChatFooter({
  sessionId,
  from,
  fromName,
  username,
  loadingChat,
  sendOutgoing,
  sendOutgoingMedia
}) {
  const [chatData, setchatData] = useState({
    media: null,
    message: '',
    messageType: 'text'
  });

  const { media, message, messageType } = chatData;

  // Media Upload
  const [mediaModal, setMediaModal] = useState(false);
  const openMediaModal = () => {
    setMediaModal(true);
  };
  const closeMediaModal = () => {
    const nextState = produce(chatData, draftState => {
      draftState.media = null;
      draftState.messageType = 'text';
    });
    setchatData(nextState);
    setMediaModal(false);
  };

  const onChangeMediaInput = e => {
    const file = e.target.files[0];

    const nextState = produce(chatData, draftState => {
      draftState.media = file;
      draftState.messageType = 'media';
    });
    setchatData(nextState);
  };

  const onUploadMedia = e => {
    onSubmit(e);
  };
  // Media Upload

  const onChangeTextInput = e => {
    const nextState = produce(chatData, draftState => {
      draftState.message = e.target.value;
      draftState.messageType = 'text';
    });
    setchatData(nextState);
  };

  const onSubmit = e => {
    e.preventDefault();
    const convId = uuidv4();
    if (messageType === 'text') {
      sendOutgoing({ sessionId, from, fromName, username, message, convId });
    } else if (messageType === 'media') {
      sendOutgoingMedia({ sessionId, from, fromName, username, media, convId });
    }
  };
  return (
    <div className="chat-footer">
      {sessionId !== '' && !loadingChat && (
        <form onSubmit={e => onSubmit(e)}>
          <button
            className="btn btn-light btn-floating"
            type="button"
            onClick={openMediaModal}
          >
            <i className="fa fa-paperclip"></i>
            <ModalMedia
              modal={mediaModal}
              media={media}
              onChange={onChangeMediaInput}
              onClosed={closeMediaModal}
              onUploadMedia={onUploadMedia}
            />
          </button>
          <input
            type="text"
            className="form-control"
            name="message"
            value={message}
            onChange={e => onChangeTextInput(e)}
            placeholder={`Replying to ${sessionId}`}
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

export default connect(mapStateToProps, { sendOutgoing, sendOutgoingMedia })(
  ChatFooter
);
