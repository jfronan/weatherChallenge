export const goToScreen = (pantalla)=> {
  return {
    type: 'NAVIGATE',
    payload: pantalla
  }
}

export const buscarResultado = (ciudad, pais)=> {
  return async (dispatch) => {
    dispatch ({
      type: 'IR_A_RESULTADO',
      payload: {
        ciudad: ciudad,
        pais: pais
      }
    });
  };
}

export const toggleResultFromFav = (id)=> {
    return {
        type: 'TOGGLE_WEATHER_ID',
        payload: id
    };
  }