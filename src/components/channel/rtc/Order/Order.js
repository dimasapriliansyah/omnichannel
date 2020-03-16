import React from 'react';
import PropTypes from 'prop-types';

import './Order.css';
import OrderLists from './OrderLists';

import capitalize from '../../../../utils/capitalizeString';

function Order(props) {
  const { lists, match, currentSessionId, setSessionId } = props;
  const channelId = match.params[0];
  return (
    <div className="sidebar-group">
      <div id="chats" className="sidebar active">
        <header className="bg-green">
          <span>{capitalize(channelId)}</span>
        </header>
        {/* Order List */}
        <div className="sidebar-body">
          <ul className="list-group list-group-flush">
            <OrderLists
              lists={lists}
              channelId={channelId}
              currentSessionId={currentSessionId}
              setSessionId={setSessionId}
            />
          </ul>
        </div>
        {/* ./ Order List */}

        {/* Queue List  */}

        {/* ./Queue List  */}
      </div>
    </div>
  );
}

Order.propTypes = {
  lists: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  currentSessionId: PropTypes.string.isRequired,
  setSessionId: PropTypes.func.isRequired
};

export default Order;
