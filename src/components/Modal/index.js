import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Modal = ({ children, onClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

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
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal
