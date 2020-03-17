import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  setDraftMessageText,
  updateRTCDraftMessage
} from '../../../../redux/actions/interaction';

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
  draft,
  sendOutgoing,
  sendOutgoingMedia,
  setDraftMessageText,
  updateRTCDraftMessage
}) {
  const [media, setMedia] = useState(null);
  const [messageType, setMessageType] = useState('text');
  const [mediaModal, setMediaModal] = useState(false);

  // Media Upload
  const openMediaModal = () => {
    setMediaModal(true);
  };
  const closeMediaModal = () => {
    setMedia(null);
    setMessageType('text');
    setMediaModal(false);
  };

  const onChangeMediaInput = e => {
    const file = e.target.files[0];
    setMessageType('media');
    setMedia(file);
  };

  const onUploadMedia = e => {
    setDraftMessageText(sessionId, '');
    onSubmit(e);
  };
  // Media Upload

  const onChangeTextInput = e => {
    const message = e.target.value;
    setDraftMessageText(sessionId, message);
  };

  const onBlurTextInput = () => {
    const actionType = 'out';
    updateRTCDraftMessage(sessionId, actionType, messageType);
  };

  const onSubmit = e => {
    e.preventDefault();
    const convId = uuidv4();
    if (messageType === 'text') {
      sendOutgoing({
        sessionId,
        from,
        fromName,
        username,
        message: draft,
        convId
      });
    } else if (messageType === 'media') {
      sendOutgoingMedia({ sessionId, from, fromName, username, media, convId });
    }
  };
  return (
    <div className="chat-footer">
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
          value={draft || ''}
          onChange={e => onChangeTextInput(e)}
          onBlur={e => onBlurTextInput(e)}
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
    </div>
  );
}

ChatFooter.propTypes = {
  sessionId: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  fromName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  sendOutgoing: PropTypes.func.isRequired,
  sendOutgoingMedia: PropTypes.func.isRequired,
  setDraftMessageText: PropTypes.func.isRequired,
  updateRTCDraftMessage: PropTypes.func.isRequired
};

const mapStateToProps = ({ outgoing }) => ({
  outgoing
});

export default connect(mapStateToProps, {
  sendOutgoing,
  sendOutgoingMedia,
  setDraftMessageText,
  updateRTCDraftMessage
})(ChatFooter);
