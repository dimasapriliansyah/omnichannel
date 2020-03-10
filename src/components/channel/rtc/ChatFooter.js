import React, { useState } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';
import { connect } from 'react-redux';

import { sendInteraction } from '../../../redux/actions/outgoing';

function ChatFooter({
  loading: interactionLoading,
  data: interactionCtx,
  error: getInteractionError,
  agentdata,
  outgoing,
  sendInteraction
}) {
  const [formData, setformData] = useState({
    message: '',
    messageType: 'text'
  });

  const { message, messageType } = formData;
  const onChangeTextInput = e => {
    const nextState = produce(formData, draftState => {
      draftState.message = e.target.value;
    });
    setformData(nextState);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (messageType === 'text') {
      const { sessionId, from, fromName } = interactionCtx[0];
      const { username } = agentdata;
      sendInteraction({ sessionId, from, fromName, username, message });
      setformData({ message: '', messageType: 'text' });
    }
  };
  return (
    <div className="chat-footer">
      {!interactionLoading &&
        interactionCtx.length > 0 &&
        !getInteractionError && (
          <form onSubmit={e => onSubmit(e)}>
            <button
              className="btn btn-light btn-floating"
              type="button"
              disabled={outgoing.loading}
            >
              <i className="fa fa-paperclip"></i>
            </button>
            <input
              type="text"
              className="form-control"
              name="message"
              value={message}
              onChange={e => onChangeTextInput(e)}
              disabled={outgoing.loading}
              placeholder="Type your message here......"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="form-buttons">
              <button
                className="btn btn-primary btn-floating"
                type="submit"
                disabled={outgoing.loading}
              >
                <i className="fa fa-send"></i>
              </button>
            </div>
          </form>
        )}
    </div>
  );
}

ChatFooter.propTypes = {};

const mapStateToProps = ({ outgoing }) => ({ outgoing });

export default connect(mapStateToProps, { sendInteraction })(ChatFooter);
