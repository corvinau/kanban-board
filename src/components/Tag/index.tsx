import React from 'react';

import { Container } from './styles';

const Tag: React.FC<ITag> = data => {
  return (
    <Container color={data.color}>
      {data.name !== '' ? data.name : '-'}
    </Container>
  );
};

export default Tag;
