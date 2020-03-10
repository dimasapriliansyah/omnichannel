import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

import './Chat.css';

class Chat extends Component {
  render() {
    const { interaction, agentdata } = this.props;
    const { loading, data, error } = interaction;

    return (
      <div className="chat" id="app-chat">
        <ChatHeader loading={loading} data={data} error={error} />
        <ChatBody loading={loading} data={data} error={error} />
        <ChatFooter
          loading={loading}
          data={data}
          error={error}
          agentdata={agentdata}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ interaction }) => ({
  interaction
});

export default connect(mapStateToProps)(Chat);
