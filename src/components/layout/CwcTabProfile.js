import React from 'react';
import PropTypes from 'prop-types';

function CwcTabProfile(props) {
  return (
    <div
      class="tab-pane show active text-center p0"
      id="profile"
      role="tabpanel"
    >
      <figure class="avatar-profile">
        <span class="avatar-title bg-avatar rounded-circle">YH</span>
      </figure>

      <h6 class="font14 mt-4">Yolanda Hutajulu</h6>
      <h6 class="font12 text-muted mb-1">
        Cust ID :{' '}
        <a href="#" class="text-green">
          233229302320
        </a>
      </h6>
      <div class="sidebar-body" style={{ padding: '10px' }}>
        <form class="text-left">
          <div class="form-group-cwc">
            <label for="custID" class="col-form-label">
              Address
            </label>
            <input type="text" class="form-control no-border" id="cust_name" />
          </div>
          <div class="form-group-cwc">
            <label for="custID" class="col-form-label">
              Company
            </label>
            <input type="text" class="form-control no-border" id="category" />
          </div>
          <div class="form-group-cwc">
            <label for="custID" class="col-form-label">
              HP
            </label>
            <input
              type="text"
              class="form-control no-border"
              id="sub_category"
            />
          </div>
          <div class="form-group-cwc">
            <label for="custID" class="col-form-label">
              HP
            </label>
            <input type="text" class="form-control no-border" id="remark" />
          </div>
          <div class="form-group-cwc">
            <label for="custID" class="col-form-label">
              Phone
            </label>
            <input type="text" class="form-control no-border" id="feedback" />
          </div>

          <button
            type="submit"
            class="btn btn-md btn-green btn-block"
            style={{
              marginTop: '1rem'
            }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

CwcTabProfile.propTypes = {};

export default CwcTabProfile;
