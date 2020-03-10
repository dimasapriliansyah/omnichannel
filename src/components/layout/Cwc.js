import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CwcHeader from './CwcHeader';
import CwcBody from './CwcBody';

function Cwc({ cwc: tabdata }) {
  const cwc = tabdata.tab.filter(
    data => data.sessionId === tabdata.currentSessionId
  );

  return (
    <div className="sidebar-group">
      <div id="right-content" className="sidebar active">
        <CwcHeader
          cwc={cwc}
          loading={tabdata.loading}
          sessionId={tabdata.currentSessionId}
        />
        <CwcBody />
      </div>
    </div>
  );
}

Cwc.propTypes = {};

const mapStateToProps = ({ cwc }) => ({ cwc });

export default connect(mapStateToProps)(Cwc);
