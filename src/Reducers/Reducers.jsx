import {produce} from 'immer';

function Reducers(state = {
  itens: [],
  selecionar: {Select: false, Item: null},
}, action) {

    return produce(state, (draft) => {

      switch (action.type) {
        case 'ITEM':
          draft.itens.push({
            Nome: action.payload.Nome,
            Imagem: action.payload.Imagem,
            Disponibilidade: action.payload.Disponibilidade
          });
          break;
        case 'ITEM_SELECIONADO':
          draft.selecionar = {
            Select: action.payload.Select,
            Item: action.payload.Item
          }
          break;
        default:
          return state
      }

    });
}

export default Reducers;
