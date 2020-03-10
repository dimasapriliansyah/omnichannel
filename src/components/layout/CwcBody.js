import React from 'react';
import PropTypes from 'prop-types';

import CwcTabProfile from './CwcTabProfile';

function CwcBody(props) {
  return (
    <div className="sidebar-body">
      <ul className="list-group list-group-flush">
        <div className="tab-content mt-3">
          <CwcTabProfile />
        </div>
      </ul>
    </div>
  );
}

CwcBody.propTypes = {};

export default CwcBody;
