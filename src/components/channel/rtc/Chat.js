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
    const { loading, messages, error } = interaction;

    let from = '';
    let fromName = '';

    if (messages.length > 0) {
      from = messages[0].from.slice(0, -3) + 'xxx';
      fromName = messages[0].fromName;
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
        {/* <ChatBody loading={loading} messages={messages} error={error} />
        <ChatFooter
          loading={loading}
          messages={messages}
          error={error}
          agentdata={agentdata}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ interaction }) => ({
  interaction
});

export default connect(mapStateToProps)(Chat);
