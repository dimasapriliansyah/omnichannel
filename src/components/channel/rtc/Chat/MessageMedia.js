import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function MessageMedia({ medianame, mediaurl, mediaSize }) {
  return (
    <Fragment>
      <div class="file-icon">
        <i class="ti-file text-white"></i>
      </div>
      <div>
        <div>
          <a href={mediaurl}>
            {medianame}
            <i class="text-white small">{mediaSize}</i>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

MessageMedia.propTypes = {
  medianame: PropTypes.string.isRequired,
  mediaurl: PropTypes.string.isRequired,
  mediaSize: PropTypes.string.isRequired
};

export default MessageMedia;
