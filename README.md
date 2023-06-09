# Sobre o projeto

Este projeto foi desenvolvido para o processo seletivo da empresa Amo Promo, e consiste em um quadro kanban básico.

Nele, foi utilizado o framework ReactJS com TypeScript, a biblioteca `styled-components` para definição dos estilos, além das bibliotecas `react-modal` para a construção dos modais dos formulários e da `react-beautiful-dnd` para controlar o drag and drop dos cards.

O objetivo da aplicação é catalogar listas e cartões para orgnaizar tarefas.

É possível adicionar novas listas e cartões além de organizar a ordem dos cards para como ficar melhor para o usuário.

Como não tenho back-end nessa aplicação para fazer a persisitência dos dados, fiz uma pequena lista de dados mockados para visualizar o funcionamento do quadro, e as modificações podem ser vistas pelo estado que fica salvo durante o uso da página.

## Rodando o projeto localmente

Clone o projeto na sua máquina.

Depois disso, é preciso instalar os pacotes do projeto.

Rode o comando abaixo

```bash
yarn install
# ou
yarn
```

Com os pacotes instalados basta rodar o comando abaixo para inicializar o projeto:

```bash
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Depois disso basta testar.

## Acessando o projeto em um servidor

Para visualizar o projeto rodando em um servidor da [`Vercel`](https://vercel.com/), acesse: [kanban-board-amo-promo.vercel.app](https://kanban-board-amo-promo.vercel.app/)
