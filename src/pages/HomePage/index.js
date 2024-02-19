import React, { useState } from 'react';
import Calendar from '../../components/Calendar';
import Modal from '../../components/Modal';
import './styles.css';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEvent = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="title">Event App</div>
      <div className="button-container">
        <button onClick={handleAddEvent}>Add +</button>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <Calendar />
        </Modal>
      )}
      
      {/* Rows for displaying scheduled events */}
      {/* This part can be added later when events are implemented */}
    </div>
  );
}

export default HomePage;
