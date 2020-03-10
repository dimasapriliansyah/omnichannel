import React from 'react';
import PropTypes from 'prop-types';

function CwcHeader({ cwc, loading, sessionId }) {
  console.log('cwc', cwc);
  console.log('loading', loading);
  console.log('sessionId', sessionId);
  return (
    <header className="bg-green" style={{ padding: '10px 10px 0px 14px' }}>
      {!loading && (
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className={`nav-link text-center ${cwc[0].currentTab ===
                'profile' && 'active'}`}
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
          <li className="nav-item">
            <a
              className={`nav-link text-center ${cwc[0].currentTab === 'cwc' &&
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
          <li className="nav-item">
            <a
              className={`nav-link text-center ${cwc[0].currentTab ===
                'journey' && 'active'}`}
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

export default CwcHeader;
