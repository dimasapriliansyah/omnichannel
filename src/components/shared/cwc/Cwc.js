import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CwcHeader from './CwcHeader';
import CwcBody from './CwcBody';

function Cwc({ cwc: tabdata }) {
  const cwc = tabdata.tab.filter(
    data => data.sessionId === tabdata.currentSessionId
  );

  if (cwc.length > 0) {
    console.log('cwc', cwc[0].currentTab);
  }

  return (
    <div className="sidebar-group">
      <div id="right-content" className="sidebar active">
        {cwc.length > 0 && !tabdata.loading && (
          <Fragment>
            <CwcHeader
              currentTab={cwc[0].currentTab}
              loading={tabdata.loading}
              sessionId={tabdata.currentSessionId}
            />
            <CwcBody
              currentTab={cwc[0].currentTab}
              profileTab={cwc[0].profileTab}
              loading={tabdata.loading}
              sessionId={tabdata.currentSessionId}
            />
          </Fragment>
        )}
      </div>
    </div>
  );
}

Cwc.propTypes = {};

const mapStateToProps = ({ cwc }) => ({ cwc });

export default connect(mapStateToProps)(Cwc);
