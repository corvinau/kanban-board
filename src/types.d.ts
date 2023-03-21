interface ITag {
  id: string;
  name: string;
  color: string;
}

interface ICard {
  id: string;
  title: string;
  tag: string;
  description: string;
  column: string;
}

interface IColumn {
  id: string;
  name: string;
  color: string;
  cards: string[];
}
