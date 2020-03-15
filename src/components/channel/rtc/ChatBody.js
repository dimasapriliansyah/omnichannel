import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Loading from '../../shared/Loading';

function ChatBody(props) {
  const { loading, chats, error } = props;
  const chatBodyRef = useRef();

  useEffect(() => {
    chatBodyRef.current.scrollTop =
      chatBodyRef.current.scrollHeight - chatBodyRef.current.clientHeight;
  }, [chats]);

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
    <Fragment>
      {loading ? (
        <div className="chat-body" ref={chatBodyRef} id="app-chat-body">
          <Loading />
        </div>
      ) : (
        <div className="chat-body" ref={chatBodyRef} id="app-chat-body">
          {error ? (
            <div className="alert alert-danger" role="alert">
              #{error.statusCode} - {error.error} fail to fetch chat data!
              <p>Please relog the app, or call the support team!</p>
            </div>
          ) : (
            <div className="messages">
              {chats.map(chat => (
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
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
}

ChatBody.propTypes = {};

export default ChatBody;
