import React from 'react';

import mockTags from '../../data/tags';

import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

import Tag from '../Tag';
import ModalPanel from '../ModalPanel';

import { Container, TagContainer } from './styles';

const FormTag: React.FC = () => {
  // const handleEditTag = () => {
  //   console.log('clicou');
  // };

  // const handleDeleteTag = () => {
  //   console.log('clicou');
  // };

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
          <div className="list-tags" key={item.id}>
            <Tag id={item.id} color={item.color} name={item.name} />

            <div
              className="column-action-button"
              role="button"
              // onClick={handleEditTag}
            >
              <div className="button-icon">
                <FaRegEdit />
              </div>
            </div>

            <ModalPanel
              button={
                <div
                  className="column-action-button"
                  role="button"
                  // onClick={handleDeleteTag}
                >
                  <div className="button-icon">
                    <FaRegTrashAlt />
                  </div>
                </div>
              }
              title="Excluir tag?"
              action="delete"
            />
          </div>
        ))}
      </TagContainer>
    </Container>
  );
};

export default FormTag;
