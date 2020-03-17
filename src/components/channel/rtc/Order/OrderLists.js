import React from 'react';
import PropTypes from 'prop-types';

import createAvatartString from '../../../../utils/createAvatartString';

function OrderLists(props) {
  const { lists, channelId, currentSessionId, setSessionId } = props;
  return lists[channelId].map(list => {
    const className =
      list.sessionId === currentSessionId
        ? 'open-chat list-group-item animate-blink'
        : 'list-group-item animate-blink';
    return (
      <li
        className={className}
        key={list.sessionId}
        onClick={e =>
          setSessionId(list.sessionId, list.channelId, list.customerId)
        }
      >
        <figure className="avatar">
          <span className="avatar-title bg-info rounded-circle">
            {createAvatartString(list.fromName)}
          </span>
        </figure>
        <div className="users-list-body">
          <h6>{list.fromName}</h6>
          {list.isDraft ? <em>{list.draft}</em> : <p>{list.lastChat}</p>}

          {list.messageCount > 0 && (
            <div className="users-list-action">
              <div className="new-message-count">{list.messageCount}</div>
            </div>
          )}
        </div>
      </li>
    );
  });
}

OrderLists.propTypes = {
  lists: PropTypes.object.isRequired,
  channelId: PropTypes.string.isRequired
};

export default OrderLists;
