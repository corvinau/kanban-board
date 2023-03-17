import React from 'react';

import Tag from '../Tag';
import ModalPanel from '../ModalPanel';
import FormCard from '../FormCard';

import { Container } from './styles';

const BoardCard: React.FC<ICard> = data => {
  return (
    <ModalPanel
      button={
        <Container>
          <div className="card-name">{data.title}</div>
          <Tag id={data.tag.id} color={data.tag.color} name={data.tag.name} />
        </Container>
      }
      title="Editar cartão"
      form={<FormCard />}
      action="edit"
    />
  );
};

export default BoardCard;
