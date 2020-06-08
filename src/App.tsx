import React, { useState } from 'react';
import ModalSearchPoints from './components/ModalSearchPoints';

import { Container } from './styles';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <Container>
      <button type="button" onClick={toggleModal}>OpenModal</button>
      <ModalSearchPoints isOpen={modalIsOpen} setIsOpen={toggleModal} />
    </Container>
  );
}

export default App;
