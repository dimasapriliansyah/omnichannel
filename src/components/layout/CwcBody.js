import React from 'react';
import PropTypes from 'prop-types';

import CwcTabProfile from './CwcTabProfile';
import CwcTabCwc from './CwcTabCwc';

function CwcBody({ currentTab, profileTab, loading, sessionId }) {
  return (
    <div className="sidebar-body">
      <ul className="list-group list-group-flush">
        <div className="tab-content mt-3">
          <CwcTabProfile
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
