import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalMedia = ({ modal, onUploadMedia, onClosed, onChange, media }) => {
  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader>Media Uploads</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="uploadmedia">Upload files:</label>
            <input
              type="file"
              className="form-control-file"
              id="uploadmedia"
              onChange={onChange}
            />
          </div>
          <button
            className="btn btn-sm btn-info"
            onClick={onUploadMedia}
            disabled={
              media === null || typeof media === 'undefined' ? true : false
            }
          >
            Upload
          </button>
          <button className="btn btn-sm btn-warning" onClick={onClosed}>
            Cancel
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalMedia;
