import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { tabSetCurrentTab } from '../../../redux/actions/cwc';

function CwcHeader({ tabSetCurrentTab, currentTab, loading, sessionId }) {
  const onClick = activeTab => {
    tabSetCurrentTab(sessionId, activeTab);
  };

  return (
    <header className="bg-green" style={{ padding: '10px 10px 0px 14px' }}>
      {!loading && (
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" onClick={e => onClick('profile')}>
            <a
              className={`nav-link text-center ${currentTab === 'profile' &&
                'active'}`}
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
            >
              <i className="fa fa-user md18"></i>
              <br />
              Profile
            </a>
          </li>
          <li className="nav-item" onClick={e => onClick('cwc')}>
            <a
              className={`nav-link text-center ${currentTab === 'cwc' &&
                'active'}`}
              data-toggle="tab"
              href="#cwc"
              role="tab"
              aria-controls="cwc"
              aria-selected="false"
            >
              <i className="fa fa-pencil-square-o md18"></i>
              <br />
              CWC
            </a>
          </li>
          <li className="nav-item" onClick={e => onClick('journey')}>
            <a
              className={`nav-link text-center ${currentTab === 'journey' &&
                'active'}`}
              data-toggle="tab"
              href="#journey"
              role="tab"
              aria-controls="journey"
              aria-selected="false"
            >
              <i className="ti-stats-up"></i>
              <br />
              Journey
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

CwcHeader.propTypes = {};

export default connect(null, { tabSetCurrentTab })(CwcHeader);
