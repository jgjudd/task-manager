import { CONSTANTS } from "../actions";

let listID = 3;
let cardID = 6;

const initialState = [
  {
    title: "List Title",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${2}`,
        text: "This is the first card of the first list"
      },
      {
        id: `card-${3}`,
        text: "This is the second card of the first list"
      }
    ]
  },
  {
    title: "List Title",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${4}`,
        text: "This is the first card of the first list"
      },
      {
        id: `card-${5}`,
        text: "This is the second card of the first list"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;
      const newState = [...state];
      // In the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listReducer;
