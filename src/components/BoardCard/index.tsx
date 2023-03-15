import React from 'react';

import { Container, Tag } from './styles';

const BoardCard: React.FC<ICard> = data => {
  console.log(data);

  return (
    <Container>
      <div className="card-name">{data.title}</div>
      <Tag color={data.tag.color}>
        {data.tag.name !== '' ? data.tag.name : '-'}
      </Tag>
    </Container>
  );
};

export default BoardCard;
