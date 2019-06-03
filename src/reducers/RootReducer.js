const initialState = {
    favoritos: [],
    pageShowing: 'busqueda',
    resultCiudad: '',
    resultPais: ''
  };
  
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        ...state,
        pageShowing: action.payload,
        resultCiudad: '',
        resultPais: ''
      }
    case 'IR_A_RESULTADO':
      return {
        ...state,
        pageShowing: 'resultado',
        resultCiudad: action.payload.ciudad || '',
        resultPais: action.payload.pais || ''
      }
    case 'TOGGLE_WEATHER_ID':
      // se usa slice(0) para almacenar una copia del array en vez de una referencia
      const favoritosCopy = state.favoritos.slice(0);
      if (favoritosCopy.includes(action.payload)) {
        favoritosCopy.splice(favoritosCopy.indexOf(action.payload), 1);
      } else {
        favoritosCopy.push(action.payload);
      };
      return {
        ...state,
        favoritos: favoritosCopy
      }

    default: return state;
  }
};

export default rootReducer;
