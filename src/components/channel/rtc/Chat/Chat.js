import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

import './Chat.css';

class Chat extends Component {
  render() {
    const { interaction, agentdata, currentSessionId } = this.props;
    const { loading, interactions, error } = interaction;

    let from = '';
    let fromName = '';
    let fromOrigin = '';
    let chats = [];

    if (typeof interactions[currentSessionId] !== 'undefined') {
      const messages = interactions[currentSessionId];
      fromOrigin = messages[0].from;
      from = messages[0].from.slice(0, -3) + 'xxx';
      fromName = messages[0].fromName;
      chats = messages;
    }

    return (
      <div className="chat" id="app-chat">
        <ChatHeader
          loading={loading}
          from={from}
          fromName={fromName}
          sessionId={currentSessionId}
          error={error}
        />
        <ChatBody loading={loading} chats={chats} error={error} />
        <ChatFooter
          sessionId={currentSessionId}
          from={fromOrigin}
          fromName={fromName}
          username={agentdata.username}
          loadingChat={loading}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ interaction }) => ({
  interaction
});

export default connect(mapStateToProps)(Chat);
