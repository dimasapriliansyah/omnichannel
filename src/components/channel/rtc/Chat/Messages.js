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
      {/* {chats.map(chat => (
        <div
          className={
            chat.actionType === 'in'
              ? 'message-item'
              : 'message-item outgoing-message'
          }
          key={chat.id}
        >
          <div className={chatClassName(chat)}>
            {chat.messageType === 'text' ? (
              chat.message
            ) : (
              <Fragment>
                <div class="file-icon">
                  <i class="ti-file text-white"></i>
                </div>
                <div>
                  <div>
                    style.zip <i class="text-white small">41.36 Mb</i>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className="message-action">
            {chat.sendDate && (
              <em>{dateFormat(chat.sendDate, 'HH:MM:ss dd-mm-yyyy ')}</em>
            )}
          </div>
        </div>
      ))} */}
    </div>
  );
}

Messages.propTypes = {
  chats: PropTypes.array.isRequired
};

export default Messages;
