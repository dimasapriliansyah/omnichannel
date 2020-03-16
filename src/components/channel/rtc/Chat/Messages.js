import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import Message from './Message';

function Messages({ chats }) {
  return (
    <div className="messages">
      {chats.map(
        ({ actionType, messageType, message, id, convId, sendDate, media }) => (
          <Message
            actionType={actionType}
            messageType={messageType}
            message={message}
            id={id}
            convId={convId}
            sendDate={sendDate}
            media={media}
            key={id || convId}
          />
        )
      )}
    </div>
  );
}

Messages.propTypes = {
  chats: PropTypes.array.isRequired
};

export default Messages;
