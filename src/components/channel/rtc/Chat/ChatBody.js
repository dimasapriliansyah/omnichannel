import React, { Fragment, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import Loading from '../../../shared/Loading';

import Messages from './Messages';

function ChatBody(props) {
  const { loading, chats, error } = props;
  const chatBodyRef = useRef();

  useEffect(() => {
    chatBodyRef.current.scrollTop =
      chatBodyRef.current.scrollHeight - chatBodyRef.current.clientHeight;
  }, [chats]);

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
            <Messages chats={chats} />
          )}
        </div>
      )}
    </Fragment>
  );
}

ChatBody.propTypes = {
  loading: PropTypes.bool.isRequired,
  chats: PropTypes.array.isRequired,
  error: PropTypes.object
};

export default ChatBody;
