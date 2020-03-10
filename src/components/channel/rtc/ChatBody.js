import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function ChatBody(props) {
  const { loading, data, error } = props;
  const chatBodyRef = useRef();

  useEffect(() => {
    chatBodyRef.current.scrollTop =
      chatBodyRef.current.scrollHeight - chatBodyRef.current.clientHeight;
  }, [data]);

  const chatClassName = ({ messageType, actionType }) => {
    if (messageType === 'text') {
      if (actionType === 'out') {
        return 'message-content text-muted';
      }
      return 'message-content';
    }

    return 'message-content message-file';
  };
  return (
    <div className="chat-body" ref={chatBodyRef} id="app-chat-body">
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
              <div className={chatClassName(message)}>
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
