import React from 'react';

import { Container, Tag } from './styles';

const BoardCard: React.FC = () => {
  return (
    <Container>
      <div className="card-name">Nome do card</div>
      <Tag>Tag</Tag>
    </Container>
  );
};

export default BoardCard;
