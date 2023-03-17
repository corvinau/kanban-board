import React from 'react';

import { Container } from './styles';

const FormColumn: React.FC = () => {
  return (
    <Container>
      <form>
        <div>
          <label htmlFor="name">
            <span>Nome da coluna:</span>
            <span aria-label="required">*</span>
          </label>
          <input type="text" id="name" name="nameColumn" required />
        </div>

        <div>
          <label htmlFor="color">
            <span>Cor da coluna:</span>
            <span aria-label="required">*</span>
          </label>
          <input type="color" id="color" name="colorColumn" required />
        </div>
      </form>
    </Container>
  );
};

export default FormColumn;
