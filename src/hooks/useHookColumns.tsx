import { useEffect, useState } from 'react';

import mockColumns from '../data/columns';

import { v4 as uuidv4 } from 'uuid';

export const useHookColumns = () => {
  const [uuid, setUuid] = useState('');
  const [nameColumn, setNameColumn] = useState('');
  const [colorColumn, setColorColumn] = useState('');
  const [newColumns, setNewColumns] = useState([] as IColumn[]);
  console.log(newColumns);

  const handleClick = () => {
    setUuid(uuidv4());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNewColumns([
      ...newColumns,
      {
        id: uuid,
        name: nameColumn,
        color: colorColumn,
        cards: [],
      },
    ]);

    setUuid('');
    setNameColumn('');
    setColorColumn('');
  };

  useEffect(() => {
    setNewColumns([...mockColumns]);
  }, []);

  return {
    uuid,
    setUuid,
    nameColumn,
    setNameColumn,
    colorColumn,
    setColorColumn,
    newColumns,
    setNewColumns,
    handleClick,
    handleSubmit,
  };
};
