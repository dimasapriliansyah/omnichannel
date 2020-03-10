import React, { Fragment } from 'react';

import avatarString from '../../../utils/createAvatartString';

import PropTypes from 'prop-types';

function ChatHeader(props) {
  const { loading, data, error } = props;

  return (
    <Fragment>
      {!loading && data.length > 0 && !error && (
        <div className="chat-header">
          <div className="chat-header-user">
            <figure className="avatar">
              <span className="avatar-title bg-avatar rounded-circle">
                {avatarString(data[0].fromName)}
              </span>
            </figure>
            <div>
              <h6 className="font14">
                {data[0].fromName} - {data[0].sessionId}
              </h6>
              <h6 className="font10 text-muted">{data[0].from}</h6>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

ChatHeader.propTypes = {};

export default ChatHeader;
