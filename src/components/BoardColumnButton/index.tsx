import React from 'react';

import { FaPlus } from 'react-icons/fa';

import { Container } from './styles';

interface IButtonProps {
  name: string;
}

const BoardColumnButton: React.FC<IButtonProps> = ({ name }) => {
  const handleOpenPanel = () => {
    console.log('clicou');
  };

  return (
    <Container>
      <div className="column-button" role="button" onClick={handleOpenPanel}>
        <div className="button-icon">
          <FaPlus />
        </div>
        <div className="button-name">{name}</div>
      </div>
    </Container>
  );
};

export default BoardColumnButton;
