import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import capitalize from '../../../utils/capitalizeString';
import createAvatartString from '../../../utils/createAvatartString';

const RTC = ({ match, rtcQueueLists }) => {
  const channelId = match.params[0];

  const queues = rtcQueueLists[channelId].map(queueList => {
    return (
      <li className="list-group-item" key={queueList.sessionId}>
        <figure className="avatar">
          <span className="avatar-title bg-info rounded-circle">
            {createAvatartString(queueList.fromName)}
          </span>
        </figure>
        <div className="users-list-body">
          <h6>{queueList.fromName}</h6>
          <p>{queueList.lastChat}</p>
          {queueList.messageCount > 0 && (
            <div className="users-list-action">
              <div className="new-message-count">{queueList.messageCount}</div>
            </div>
          )}
        </div>
      </li>
    );
  });

  return (
    // Left Column
    <div className="sidebar-group">
      {/* Customer Lists */}
      <div id="chats" className="sidebar active">
        <header className="bg-green">
          <span>{capitalize(channelId)}</span>
        </header>
        {/* Customer List Body */}
        <div className="sidebar-body">
          <ul className="list-group list-group-flush">{queues}</ul>
        </div>

        {/* ./ Customer List Body */}
      </div>
      {/* ./ Customer Lists */}
    </div>
    // ./Left Column
  );
};

RTC.propTypes = {
  match: PropTypes.object.isRequired,
  rtcQueueLists: PropTypes.object.isRequired
};

const mapStateToProps = ({ rtc }) => ({ rtcQueueLists: rtc });

export default connect(mapStateToProps)(RTC);
