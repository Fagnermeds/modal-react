import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';
import { Form } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalSearchPoints: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {  
  const handleSubmit = () => {
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
      <Form onSubmit={handleSubmit} >
        <h1>Example Modal</h1>
        <Input icon={FiUser} type="text" placeholder="Name" />
        <Input icon={FiLock} type="password" placeholder="Password" />
        <Button type="submit">Send</Button>
      </Form>
    </Modal>
  );
}

export default ModalSearchPoints;