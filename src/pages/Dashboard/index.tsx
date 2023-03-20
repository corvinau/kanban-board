import React from 'react';

import moockColumns from '../../data/columns';

import BoardColumn from '../../components/BoardColumn';
import BoardColumnButton from '../../components/BoardColumnButton';
import ModalPanel from '../../components/ModalPanel';
import FormColumn from '../../components/FormColumn';
import FormTag from '../../components/FormTag';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      {moockColumns.map(item => (
        <BoardColumn key={item.id} columns={item} />
      ))}

      <div className="button-columns">
        <ModalPanel
          button={<BoardColumnButton name={'Adicionar nova lista'} />}
          title="Adicionar nova lista"
          form={<FormColumn />}
        />

        <ModalPanel
          button={<BoardColumnButton name={'Adicionar nova tag'} />}
          title="Adicionar nova tag"
          form={<FormTag />}
        />
      </div>
    </Container>
  );
};

export default Dashboard;
