import React from 'react';

import { Container } from './styles';

interface ITagProps {
  tags: ITag;
}

const Tag: React.FC<ITagProps> = ({ tags }) => {
  return (
    <Container id={tags.id} color={tags.color}>
      {tags.name !== '' ? tags.name : '-'}
    </Container>
  );
};

export default Tag;
