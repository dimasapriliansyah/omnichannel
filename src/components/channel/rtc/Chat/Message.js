import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

import MessageMedia from './MessageMedia';

const chatActionClassName = actionType => {
  if (actionType === 'in') return 'message-item';
  return 'message-item outgoing-message';
};

const chatTypeClassName = (messageType, actionType) => {
  if (messageType === 'text') {
    if (actionType === 'out') {
      return 'message-content text-muted';
    }
    return 'message-content';
  }

  return 'message-content message-file';
};

function Message({
  actionType,
  messageType,
  message,
  convId,
  sendDate,
  media
}) {
  return (
    <div className={chatActionClassName(actionType)}>
      <div className={chatTypeClassName(messageType, actionType)}>
        {messageType === 'text' ? (
          message
        ) : (
          <MessageMedia
            medianame={media.name}
            mediaurl={media.url}
            mediaSize={media.size}
          />
        )}
      </div>
      <div className="message-action">
        {sendDate && <em>{dateFormat(sendDate, 'HH:MM:ss dd-mm-yyyy ')}</em>}
      </div>
    </div>
  );
}

Message.propTypes = {
  actionType: PropTypes.oneOf(['in', 'out']).isRequired,
  messageType: PropTypes.oneOf(['text', 'media']).isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  media: PropTypes.object,
  convId: PropTypes.string,
  sendDate: PropTypes.string
};

export default Message;
