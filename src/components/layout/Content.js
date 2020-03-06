import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import PrivateRoute from './PrivateRoute';
import Navbar from './Navbar';
import RTC from '../channel/rtc/RTC';
import NRTC from '../channel/nrtc/NRTC';

import {
  connectHandler,
  connectErrorHandler,
  connectTimeoutHandler,
  errorHandler as socketErrorHandler,
  disconnectHandler,
  reconnectHandler,
  reconnectAttemptHandler,
  reconnectingHandler,
  reconnectErrorHandler,
  reconnectFailHandler,
  ping as socketPingHandler,
  pong as socketPongHandler,
  newQueueHandler
} from '../../socket';

const TENANT_ID = 'omnichannel_dev';
const SOCKET_URL = 'http://localhost:3002';

class Content extends Component {
  socket = null;

  componentDidMount() {
    const { username, userlevel, groupId, name, isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return;
    }

    const socketOptions = {
      query: {
        tenantId: TENANT_ID,
        username,
        userlevel,
        groupId,
        name
      }
    };
    this.socket = io(SOCKET_URL, socketOptions);

    // DEFAULT SOCKET IO EVENTS
    this.socket.on('connect', connectHandler);
    this.socket.on('connect_error', connectErrorHandler);
    this.socket.on('connect_timeout', connectTimeoutHandler);
    this.socket.on('error', socketErrorHandler);
    this.socket.on('disconnect', disconnectHandler);
    this.socket.on('reconnect', reconnectHandler);
    this.socket.on('reconnect_attempt', reconnectAttemptHandler);
    this.socket.on('reconnecting', reconnectingHandler);
    this.socket.on('reconnect_error', reconnectErrorHandler);
    this.socket.on('reconnect_failed', reconnectFailHandler);
    this.socket.on('ping', socketPingHandler);
    this.socket.on('pong', socketPongHandler);

    // CUSTOM SOCKET IO EVENTS
    this.socket.on('newQueue', newQueueHandler);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.socket.close();
    this.socket = null;
  }

  render() {
    const rtcPath = '(whatsapp||telegram)';
    const nrtcPath = '(voice||email)';
    const { username, userlevel, channelId } = this.props;
    return (
      <div className="layout">
        <Navbar
          username={username}
          userlevel={userlevel}
          channelId={channelId}
        />
        <div className="content">
          <Switch>
            <PrivateRoute exact path={`/agent/${rtcPath}`} component={RTC} />
            <PrivateRoute exact path={`/agent/${nrtcPath}`} component={NRTC} />
            <PrivateRoute
              exact
              path={`/supervisor/report`}
              render={() => <h3>SPV - Report</h3>}
            />
            <PrivateRoute
              exact
              path={`/supervisor/dashboard`}
              render={() => <h3>SPV - Dashboard</h3>}
            />
            <PrivateRoute
              exact
              path={`/supervisor/monitoring`}
              render={() => <h3>SPV - Monitoring</h3>}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  username: auth.user.username,
  userlevel: auth.user.level,
  groupId: auth.user.groupId,
  name: auth.user.name,
  channelId: auth.groupSkill.channelId,
  isAuthenticated: auth.isAuthenticated
});

Content.propTypes = {
  username: PropTypes.string.isRequired,
  userlevel: PropTypes.string.isRequired,
  groupId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Content);
