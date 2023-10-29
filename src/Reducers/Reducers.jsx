import {produce} from 'immer';

function Reducers(state = {
  itens: [
    { 
      Nome: "Pano de Prato",
      Imagem: "https://i.ibb.co/ZhqRHxG/pano-prato.jpg"
    },

    { 
      Nome: "Jogo de Toalhas",
      Imagem: "https://i.ibb.co/k1yKCvj/toalha.png"
    },

    { 
      Nome: "Jogo de Lençois",
      Imagem: "https://i.ibb.co/JpmVKdJ/jogo-de-len-ou.jpg"
    },

    { 
      Nome: "Sanduicheira",
      Imagem: "https://i.ibb.co/HGzk85y/sanduicheira.png"
    },

    { 
      Nome: "Airfray",
      Imagem: "https://i.ibb.co/tXf3f5S/airfray.jpg"
    },

    { 
      Nome: "Batedeira",
      Imagem: "https://i.ibb.co/48ybcrK/batedeira.jpg"
    },

    { 
      Nome: "Liquidificador",
      Imagem: "https://i.ibb.co/hy87GCP/liquidificador.png"
    },

    { 
      Nome: "Cafeteira",
      Imagem: "https://i.ibb.co/wJ8GqXT/cafeteira.png"
    },


    { 
      Nome: "Garrafa de Café",
      Imagem: "https://i.ibb.co/5xzV3j9/garrafa-de-caf.jpg"
    },

    { 
      Nome: "Panela de Pressão",
      Imagem: "https://i.ibb.co/GnWXCL0/panela-de-press-o.png"
    },

    { 
      Nome: "Ventilador",
      Imagem: "https://i.ibb.co/TmgyJK9/ventilador.jpg"
    },
    

    { 
      Nome: "Jogo de Panelas",
      Imagem: "https://i.ibb.co/ZdWgyXW/panelas.png"
    },

    { 
      Nome: "Jogo de Prato",
      Imagem: "https://i.ibb.co/bNRcj58/prato.jpg"
    },

    { 
      Nome: "Escorredor",
      Imagem: "https://i.ibb.co/s9r6qJH/escorredor.png"
    },

    { 
      Nome: "Travessa",
      Imagem: "https://i.ibb.co/cLM9dQS/travessa.jpg"
    },

    { 
      Nome: "Jogo de Garrafas",
      Imagem: "https://i.ibb.co/W5TGXwZ/garrafas.jpg"
    },

    { 
      Nome: "Jogo de Copos",
      Imagem: "https://i.ibb.co/nMRhV5W/copos.jpg"
    },

    { 
      Nome: "Jogo de Talher",
      Imagem: "https://i.ibb.co/VBxFYbh/jogo-de-talher.jpg"
    },

    { 
      Nome: "Jogo de Facas",
      Imagem: "https://i.ibb.co/QJf56tY/jogo-de-faca.jpg"
    },],

    selecionar: false,
    item: null
}, action) {

    return produce(state, (draft) => {

      switch (action.type) {
        case 'ADICIONAR_ITEM':
          draft.itens.push(action.item);
          break;
        case 'ITEM_SELECIONADO':
          draft.selecionar = action.payload
          break;
        case "ITEM":
          draft.item = action.payload
          break;
        default:
          return state
      }

    });
}

export default Reducers;
