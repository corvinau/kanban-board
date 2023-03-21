import React from 'react';

import { FaPlus, FaRegTrashAlt } from 'react-icons/fa';

import Tag from '../Tag';
import ModalPanel from '../ModalPanel';
import FormCard from '../FormCard';

import { Container } from './styles';

interface ICardProps {
  card: ICard;
}

const BoardCard: React.FC<ICardProps> = ({ card }) => {
  return (
    <Container>
      <div className="card-header">
        <div className="card-name">{card.title}</div>

        <div
          className="card-action-button"
          role="button"
          onClick={() => {
            console.log('deleta');
          }}
        >
          <div className="button-icon-header">
            <FaRegTrashAlt />
          </div>
        </div>
      </div>

      <div className="card-button">
        <Tag tags={card.tag} />

        <ModalPanel
          button={
            <div className="card-action-button">
              <div className="button-icon">
                <FaPlus />
              </div>{' '}
              Ver mais
            </div>
          }
          title="Editar cartão"
          form={<FormCard />}
        />
      </div>
    </Container>
  );
};

export default BoardCard;
