import React, { useEffect } from "react";
import "./ConfirmationDeleteModal.css";

const DeleteModal = ({ onClose, show, onDelete, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={ onClose } className='btn btn-danger'>
          Cancel
        </button>
        <button type="button" onClick={ onDelete } className='btn btn-primary pull-right'>
          Delete
        </button>
      </section>
    </div>
  );
}

export default DeleteModal;
