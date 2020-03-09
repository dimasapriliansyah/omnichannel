import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadInteraction } from '../../../redux/actions/interaction';

import Order from './Order';
import Chat from './Chat';

import Cwc from '../../layout/Cwc';

class RTC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: ''
    };
    this.setSessionId = this.setSessionId.bind(this);
  }
  setSessionId(sessionId, channelId) {
    const { loadInteraction } = this.props;
    loadInteraction(channelId, sessionId);
    this.setState({ sessionId });
  }

  render() {
    const { match, rtcQueueLists } = this.props;
    const { sessionId } = this.state;
    return (
      <Fragment>
        <Order
          lists={rtcQueueLists}
          match={match}
          currentSessionId={sessionId}
          setSessionId={this.setSessionId}
        />
        <Chat currentSessionId={sessionId} />
        <Cwc />
      </Fragment>
    );
  }
}

RTC.propTypes = {
  match: PropTypes.object.isRequired,
  rtcQueueLists: PropTypes.object.isRequired
};

const mapStateToProps = ({ rtc, interaction }) => ({
  rtcQueueLists: rtc
});

export default connect(mapStateToProps, { loadInteraction })(RTC);
