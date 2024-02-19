import React, { Children, useState } from 'react';
import './styles.css';

const Modal = ({ children, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          className="modal-input"
        />
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          className="modal-textarea"
        />
        {children}
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
