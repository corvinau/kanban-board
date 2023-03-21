import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import mockCards from '../data/cards';

export const useHookCards = () => {
  const [uuidCard, setUuidCard] = useState('');
  const [columnCard, setColumnCard] = useState('');
  const [titleCard, setTitleCard] = useState('');
  const [tagCard, setTagCard] = useState('');
  const [descriptionCard, setDescriptionCard] = useState('');
  const [newCards, setNewCards] = useState([] as ICard[]);

  const handleClickSaveCard = (columnsId: string) => {
    setUuidCard(uuidv4());
    setColumnCard(columnsId);
  };

  // const handleClickUpdateCard = (card: ICard) => {
  //   setUuidCard(card.id);
  //   setColumnCard(card.column);
  //   setTitleCard(card.title);
  //   setTagCard(card.tag);
  //   setDescriptionCard(card.description);
  // };

  const handleSubmitCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNewCards([
      ...newCards,
      {
        id: uuidCard,
        title: titleCard,
        tag: tagCard,
        description: descriptionCard,
        column: columnCard,
      },
    ]);

    setUuidCard('');
    setColumnCard('');
    setTitleCard('');
    setTagCard('');
    setDescriptionCard('');
  };

  // const handleDeleteCard = (cardId: string) => {
  //   const items = newCards;
  //   setNewCards(items.filter(item => item.id !== cardId));
  // };

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(newCards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setNewCards(items);
  }
  console.log(newCards);

  useEffect(() => {
    setNewCards([...mockCards]);
  }, []);

  return {
    uuidCard,
    setUuidCard,
    columnCard,
    setColumnCard,
    titleCard,
    setTitleCard,
    tagCard,
    setTagCard,
    descriptionCard,
    setDescriptionCard,
    newCards,
    setNewCards,
    handleClickSaveCard,
    // handleClickUpdateCard,
    handleSubmitCard,
    // handleDeleteCard,
    handleOnDragEnd,
  };
};
