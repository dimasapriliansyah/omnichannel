import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../../redux/actions/auth';
import Logo from '../../logo-white.svg';
import './Navbar.css';

const loadNavItem = (userlevel, channelId) => {
  const supervisorMenus = [
    { path: 'dashboard', icon: 'pie-chart' },
    { path: 'report', icon: 'database' },
    { path: 'monitoring', icon: 'desktop' }
  ];
  if (userlevel === 'agent' && channelId) {
    return (
      <li>
        <NavLink to={`/agent/${channelId}`} activeClassName="active">
          <i className={`fa fa-${channelId}`}></i>
        </NavLink>
      </li>
    );
  }
  switch (userlevel) {
    case 'supervisor':
      return supervisorMenus.map(menu => (
        <li>
          <NavLink to={`/supervisor/${menu.path}`} activeClassName="active">
            <i className={`fa fa-${menu.icon}`}></i>
          </NavLink>
        </li>
      ));

    default:
      return null;
  }
};

const Navbar = ({ logout, userlevel, channelId, username }) => {
  const onClickLogout = e => {
    logout(username);
  };
  return (
    <nav className="navigation">
      <div className="nav-group">
        <ul>
          <li>
            <NavLink className="logo" to={`/${userlevel}`}>
              <img src={Logo} alt="logo" />
            </NavLink>
          </li>
          {loadNavItem(userlevel, channelId)}
          <li className="brackets">
            <NavLink to="/friends-chat" activeClassName="active">
              <i className="fa fa-user"></i>
            </NavLink>
          </li>
          <li>
            <button className="btn btn-lg" onClick={e => onClickLogout()}>
              <i className="ti-power-off logout-button"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
  userlevel: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(null, { logout })(Navbar);
