import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function ChatBody(props) {
  const { loading, data, error } = props;
  return (
    <div className="chat-body" id="app-chat-body">
      {!loading && data.length > 0 && !error && (
        <div className="messages">
          {data.map(message => (
            <div
              className={
                message.actionType === 'in'
                  ? 'message-item'
                  : 'message-item outgoing-message'
              }
              key={message.id}
            >
              <div
                className={
                  message.messageType === 'text'
                    ? 'message-content'
                    : 'message-content message-file'
                }
              >
                {message.messageType === 'text' ? (
                  message.message
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ChatBody.propTypes = {};

export default ChatBody;
