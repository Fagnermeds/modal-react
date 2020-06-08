import React from 'react';
import ReactModal from 'react-modal';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#F0F0F5',
    color: '#000000',
    borderRadius: '8px',
    outline: 'none',
    width: '480px',
    height: '480px',
    border: 'none',
  },
  overlay: {
    backgroundColor: '#121214e6',
  },
};

const Modal: React.FC<IModalProps> = ({ isOpen, setIsOpen, children }) => {
  
  return (
    <div>
      <ReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={setIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </ReactModal>
    </div>
  );
}

export default Modal;
