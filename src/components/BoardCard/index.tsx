import React from 'react';

import { FaPlus } from 'react-icons/fa';

import Tag from '../Tag';
import ModalPanel from '../ModalPanel';
import FormCard from '../FormCard';

import { Container } from './styles';

const BoardCard: React.FC<ICard> = data => {
  return (
    <Container>
      <div className="card-name">{data.title}</div>

      <div className="card-button">
        <Tag id={data.tag.id} color={data.tag.color} name={data.tag.name} />

        <ModalPanel
          button={
            <div>
              <div className="button-icon">
                <FaPlus />
              </div>{' '}
              Ver mais
            </div>
          }
          title="Editar cartão"
          form={<FormCard />}
          action="edit"
        />
      </div>
    </Container>
  );
};

export default BoardCard;
