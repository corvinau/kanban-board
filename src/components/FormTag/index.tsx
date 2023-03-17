import React from 'react';

import { Container } from './styles';

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
    </Container>
  );
};

export default FormTag;

// interface ITag {
//   name: string;
//   color: string;
// }
