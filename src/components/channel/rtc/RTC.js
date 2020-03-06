import React from 'react';
// import PropTypes from 'prop-types';

import capitalize from '../../../utils/capitalizeString';

const RTC = ({ match }) => {
  const channelId = match.params[0];
  console.log('channelId', channelId);
  return (
    // Left Column
    <div className="sidebar-group">
      {/* Customer Lists */}
      <div id="chats" className="sidebar active">
        <header className="bg-green">
          <span>{capitalize(channelId)}</span>
        </header>
        {/* Customer List Body */}

        {/* ./ Customer List Body */}
      </div>
      {/* ./ Customer Lists */}
    </div>
    // ./Left Column
  );
};

// RTC.propTypes = {};

export default RTC;
