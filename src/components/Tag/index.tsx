import React from 'react';

import mockTags from '../../data/tags';

import { Container } from './styles';

interface ITagProps {
  tags: string;
}

const Tag: React.FC<ITagProps> = ({ tags }) => {
  return (
    <>
      {mockTags
        .filter(item => item.id === tags)
        .map(item => (
          <Container key={item.id} id={item.id} color={item.color}>
            {item.name !== '' ? item.name : '-'}
          </Container>
        ))}
    </>
  );
};

export default Tag;
