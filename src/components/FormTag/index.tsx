import React from 'react';

import mockTags from '../../data/tags';
import Tag from '../Tag';

import { Container, TagContainer } from './styles';

const FormTag: React.FC = () => {
  return (
    <Container>
      <form>
        <div>
          <label htmlFor="name">
            <span>Nome da tag:</span>
            <span aria-label="required">*</span>
          </label>
          <input type="text" id="name" name="nameTag" required />
        </div>

        <div>
          <label htmlFor="color">
            <span>Cor da tag:</span>
            <span aria-label="required">*</span>
          </label>
          <input type="color" id="color" name="colorTag" required />
        </div>
      </form>

      <hr className="divider" />

      <h2>Tags cadastradas</h2>

      <TagContainer>
        {mockTags.map(item => (
          <Tag id={item.id} color={item.color} name={item.name} />
        ))}
      </TagContainer>
    </Container>
  );
};

export default FormTag;
