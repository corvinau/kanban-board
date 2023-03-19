import React from 'react';

import { Container } from './styles';

const Tag: React.FC<ITag> = data => {
  return (
    <Container id={data.id} color={data.color}>
      {data.name !== '' ? data.name : '-'}
    </Container>
  );
};

export default Tag;
