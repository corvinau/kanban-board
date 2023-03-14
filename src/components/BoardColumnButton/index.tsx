import React from 'react';

import { FaPlus } from 'react-icons/fa';

import { Container } from './styles';

const BoardColumnButton: React.FC = () => {
  return (
    <Container>
      <div className="column-button" role="button">
        <div className="button-icon">
          <FaPlus />
        </div>
        <div className="button-name">Adicionar outra lista</div>
      </div>
    </Container>
  );
};

export default BoardColumnButton;
