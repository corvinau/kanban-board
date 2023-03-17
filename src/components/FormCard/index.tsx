import React from 'react';

import { Container } from './styles';

const FormCard: React.FC = () => {
  return (
    <Container>
      <form>
        <div>
          <label htmlFor="title">
            <span>Título:</span>
            <span aria-label="required">*</span>
          </label>
          <input type="text" id="title" name="titleCard" required />
        </div>

        <div>
          <label htmlFor="tag">
            <span>Tag:</span>
            <span aria-label="required">*</span>
          </label>
          <select id="tag" name="tagCard" required>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>

        <div>
          <label htmlFor="description">
            <span>Descrição:</span>
          </label>
          <textarea id="description" name="descriptionCard" rows={4} />
        </div>

        <div>
          <label htmlFor="column">
            <span>Coluna:</span>
            <span aria-label="required">*</span>
          </label>
          <select id="column" name="columnCard" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </form>
    </Container>
  );
};

export default FormCard;
