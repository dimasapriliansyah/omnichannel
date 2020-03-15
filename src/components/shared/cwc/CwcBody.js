import React from 'react';
import PropTypes from 'prop-types';

import TabProfile from './TabProfile';
import CwcTabCwc from './TabCwc';

function CwcBody({ currentTab, profileTab, loading, sessionId }) {
  return (
    <div className="sidebar-body">
      <ul className="list-group list-group-flush">
        <div className="tab-content mt-3">
          <TabProfile
            currentTab={currentTab}
            profileTab={profileTab}
            loading={loading}
            sessionId={sessionId}
          />
          <CwcTabCwc
            currentTab={currentTab}
            profileTab={profileTab}
            loading={loading}
            sessionId={sessionId}
          />
        </div>
      </ul>
    </div>
  );
}

CwcBody.propTypes = {};

export default CwcBody;
