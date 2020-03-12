import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { tabSetProfile } from '../../redux/actions/cwc';

import createAvatartString from '../../utils/createAvatartString';

function CwcTabProfile({
  currentTab,
  profileTab,
  loading,
  sessionId,
  tabSetProfile
}) {
  const [profileData, setprofileData] = useState({
    ...profileTab
  });

  const {
    id,
    type,
    name,
    gender,
    address,
    city,
    company,
    priority,
    updater
  } = profileData;

  useEffect(() => {
    setprofileData({ ...profileTab });
  }, [profileTab]);

  const onChange = e => {
    const { name: formName, value } = e.target;
    console.log('name', name);
    console.log('value', value);
    tabSetProfile(sessionId, { formName, value });
  };

  const activeTabClass =
    currentTab === 'profile'
      ? 'tab-pane show active text-center p0'
      : 'tab-pane text-center p0';

  return (
    <div className={activeTabClass} id="profile" role="tabpanel">
      {profileTab && !loading && (
        <Fragment>
          <figure className="avatar-profile">
            <span className="avatar-title bg-avatar rounded-circle">
              {createAvatartString(name)}
            </span>
          </figure>
          <h6 className="font14 mt-4">{name}</h6>
          <h6 className="font12 text-muted mb-1">
            Cust ID : <span className="text-green">{id}</span>
          </h6>
          <div className="sidebar-body" style={{ padding: '10px' }}>
            <form className="text-left">
              <div className="form-group-cwc">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control no-border"
                  id="name"
                  value={name}
                  name="name"
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group-cwc">
                <label htmlFor="gender" className="col-form-label">
                  Gender
                </label>
                <select
                  name="gender"
                  className="form-control no-border"
                  id="gender"
                  value={gender}
                  onChange={onChange}
                >
                  <option value=""></option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
              <div className="form-group-cwc">
                <label htmlFor="address" className="col-form-label">
                  Address
                </label>
                <textarea
                  name="address"
                  className="form-control no-border"
                  id="address"
                  cols="2"
                  rows="2"
                  value={address}
                  onChange={onChange}
                />
              </div>
              <div className="form-group-cwc">
                <label htmlFor="city" className="col-form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control no-border"
                  id="city"
                  value={city}
                  name="city"
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group-cwc">
                <label htmlFor="company" className="col-form-label">
                  Company
                </label>
                <input
                  type="text"
                  className="form-control no-border"
                  id="company"
                  value={company}
                  name="company"
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group-cwc">
                <label htmlFor="priority" className="col-form-label">
                  Priority
                </label>
                <select
                  name="priority"
                  className="form-control no-border"
                  id="priority"
                  value={priority}
                  onChange={onChange}
                >
                  <option value="0">Reguler</option>
                  <option value="1">Priority</option>
                </select>
              </div>
              <p
                className="text-muted"
                style={{ paddingTop: '8px', textAlign: 'right', margin: '0px' }}
              >
                <em>Last Update: {updater}</em>
              </p>
              <button
                type="submit"
                className="btn btn-md btn-info btn-block"
                style={{ marginTop: '1rem' }}
                disabled={type === 'view' ? true : false}
              >
                Save
              </button>
            </form>
          </div>
        </Fragment>
      )}
    </div>
  );
}

CwcTabProfile.propTypes = {};

export default connect(null, { tabSetProfile })(CwcTabProfile);
