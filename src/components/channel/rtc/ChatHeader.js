import React, { Fragment } from 'react';

import Loading from '../../shared/Loading';

import avatarString from '../../../utils/createAvatartString';

import PropTypes from 'prop-types';

function ChatHeader(props) {
  const { from, fromName, sessionId, error, loading } = props;

  return (
    <div className="chat-header">
      <div className="chat-header-user">
        <figure className="avatar">
          <span className="avatar-title bg-avatar rounded-circle">
            {loading ? <Loading /> : avatarString(fromName)}
          </span>
        </figure>
        <div>
          <h6 className="font14">
            {loading || error ? <Loading /> : `${fromName} - ${sessionId}`}
          </h6>
          <h6 className="font10 text-muted">{loading ? <Loading /> : from}</h6>
        </div>
      </div>
    </div>
  );
}

ChatHeader.propTypes = {
  from: PropTypes.string.isRequired,
  fromName: PropTypes.string.isRequired,
  sessionId: PropTypes.string.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

export default ChatHeader;
