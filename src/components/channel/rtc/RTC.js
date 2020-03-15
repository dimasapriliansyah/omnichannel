import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadInteraction } from '../../../redux/actions/interaction';

import Order from './Order';
import Chat from './Chat';

import Cwc from '../../shared/cwc/Cwc';

class RTC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: ''
    };
    this.setSessionId = this.setSessionId.bind(this);
  }
  setSessionId(sessionId, channelId, customerId) {
    const { loadInteraction } = this.props;
    loadInteraction(channelId, sessionId, customerId);
    this.setState({ sessionId });
  }

  render() {
    const { match, rtcQueueLists, agentdata } = this.props;
    const { sessionId } = this.state;
    return (
      <Fragment>
        <Order
          lists={rtcQueueLists}
          match={match}
          currentSessionId={sessionId}
          setSessionId={this.setSessionId}
        />
        <Chat currentSessionId={sessionId} agentdata={agentdata} />
        <Cwc />
      </Fragment>
    );
  }
}

RTC.propTypes = {
  match: PropTypes.object.isRequired,
  rtcQueueLists: PropTypes.object.isRequired
};

const mapStateToProps = ({ rtc, auth }) => ({
  rtcQueueLists: rtc,
  agentdata: auth.user
});

export default connect(mapStateToProps, { loadInteraction })(RTC);
