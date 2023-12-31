import React from 'react';
import ReactModal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    border: 'none',
    borderRadius: '20px',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: ' rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
    zIndex: '1200',
  },
  body: {
    overflow: 'hidden',
  },
};

ReactModal.setAppElement('#root');

const ModalWindow = ({ videos, modalIsOpen, closeModal }) => {
  console.log("modalvideoa - ", videos);
  return (
    <ReactModal
      isOpen={modalIsOpen}
      style={modalStyles}
      onRequestClose={closeModal}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
    >

      {videos.length > 0 && (
        <iframe
          autoPlay
          title="Trailer"
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${videos[0].key}`}
          allow="autoplay"
        />
      )}

    </ReactModal>
  );
};

export default ModalWindow;
