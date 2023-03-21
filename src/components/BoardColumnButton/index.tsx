import React from 'react';

import { FaPlus } from 'react-icons/fa';

import { Container } from './styles';

interface IButtonProps {
  name: string;
}

const BoardColumnButton: React.FC<IButtonProps> = ({ name }) => {
  return (
    <Container>
      <div className="column-button" role="button">
        <div className="button-icon">
          <FaPlus />
        </div>
        <div className="button-name">{name}</div>
      </div>
    </Container>
  );
};

export default BoardColumnButton;
