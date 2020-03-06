import React, { useState } from 'react';
import produce from 'immer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { login } from '../../redux/actions/auth';
import { ReactComponent as Logo } from '../../logo.svg';

const Login = ({
  login,
  loading,
  error,
  isAuthenticated,
  user,
  groupSkill
}) => {
  const [formData, setformData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e => {
    const nextState = produce(formData, draftState => {
      draftState[e.target.name] = e.target.value;
    });
    setformData(nextState);
  };

  const onSubmit = e => {
    e.preventDefault();
    login({ username, password });
  };

  if (isAuthenticated) {
    const { level } = user;
    const { channelId } = groupSkill;
    switch (level) {
      case 'admin':
        return <Redirect to="/admin" />;
      case 'agent':
        return <Redirect to={`/agent/${channelId}`} />;
      case 'backroom':
        return <Redirect to="/backroom" />;
      case 'supervisor':
        return <Redirect to="/supervisor" />;
      default:
        return;
    }
  }
  return (
    <div className="login form-membership">
      <div className="form-wrapper">
        <div className="logo">
          <Logo />
        </div>
        <h5>Omnichannel - Login</h5>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group input-group-lg">
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={e => onChange(e)}
              placeholder="Username"
              required
              autoFocus
              autoComplete="false"
            />
          </div>
          <div className="form-group input-group-lg">
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              placeholder="Password"
              required
            />
          </div>
          {!loading && error && <p className="text-danger">{error.data}</p>}
          <button className="btn btn-primary btn-lg btn-block">Login</button>
        </form>
        <hr />
        <p>"Instead of focusing on the competition, focus on the customer."</p>
        <p className="text-muted">
          <em>Engage them via:</em>
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <button href="!#" className="btn btn-floating btn-whatsapp">
              <i className="fa fa-whatsapp"></i>
            </button>
          </li>
          <li className="list-inline-item">
            <button href="!#" className="btn btn-floating btn-twitter">
              <i className="fa fa-twitter"></i>
            </button>
          </li>
          <li className="list-inline-item">
            <button href="!#" className="btn btn-floating btn-facebook">
              <i className="fa fa-facebook"></i>
            </button>
          </li>
          <li className="list-inline-item">
            <button href="!#" className="btn btn-floating btn-instagram">
              <i className="fa fa-instagram"></i>
            </button>
          </li>
          <li className="list-inline-item">
            <button href="!#" className="btn btn-floating btn-google">
              <i className="fa fa-google"></i>
            </button>
          </li>
          <li className="list-inline-item">
            <button href="!#" className="btn btn-floating btn-telegram">
              <i className="fa fa-telegram"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
  isAuthenticated: auth.isAuthenticated,
  user: auth.user,
  groupSkill: auth.groupSkill
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  groupSkill: PropTypes.object
};

export default connect(mapStateToProps, { login })(Login);
