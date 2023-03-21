import React from 'react';

import mockTags from '../../data/tags';

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
            {mockTags.map(item => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description">
            <span>Descrição:</span>
          </label>
          <textarea id="description" name="descriptionCard" rows={4} />
        </div>

        <div className="button-save">
          <button type="submit" onClick={() => {}}>
            Salvar
          </button>
        </div>
      </form>
    </Container>
  );
};

export default FormCard;
