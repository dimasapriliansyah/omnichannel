import React from 'react';
import PropTypes from 'prop-types';

function CwcTabCwc({ currentTab }) {
  const activeTabClass =
    currentTab === 'cwc' ? 'tab-pane m20 show active' : 'tab-pane m20';

  return (
    <div className={activeTabClass} id="cwc" role="tabpanel">
      <form>
        <div className="form-group-cwc">
          <label htmlFor="category" className="col-form-label">
            Category
          </label>
          <input type="text" className="form-control no-border" id="category" />
        </div>
        <div className="form-group-cwc">
          <label htmlFor="sub-category" className="col-form-label">
            Sub Category
          </label>
          <input
            type="text"
            className="form-control no-border"
            id="sub-category"
          />
        </div>
        <div className="form-group-cwc">
          <label htmlFor="remark" className="col-form-label">
            Remark
          </label>
          <input type="text" className="form-control no-border" id="remark" />
        </div>
        <div className="form-group-cwc">
          <label htmlFor="feedback" className="col-form-label">
            Feedback
          </label>
          <input type="text" className="form-control no-border" id="feedback" />
        </div>
        <div className="form-group-cwc">
          <label htmlFor="sentiment" className="col-form-label">
            Sentiment
          </label>
          <select
            name="sentiment"
            className="form-control no-border"
            id="sentiment"
            // value={priority}
            // onChange={onChange}
          >
            <option value="1">😐 - Neutral</option>
            <option value="2">😁 - Positive</option>
            <option value="3">😔 - Negative</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-md btn-green btn-block"
          style={{ marginTop: '4rem' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

CwcTabCwc.propTypes = {};

export default CwcTabCwc;
