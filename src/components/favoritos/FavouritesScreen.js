import React from 'react';
import WeatherWindow from '../weatherWindow/WeatherWindowContainer';
import './FavoritesScreen.css';

import flechaAtras from '../../assets/flechaAtras.png';
import separator from '../../assets/separator.png';

export default class FavouritesScreen extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="personajesContainer" className="relative fill">
        <div className='returnArrow clickFeedback hoverPoint' onClick={()=> this.props.goToSearch()}>
          <img src={flechaAtras} alt="Volver" title="Volver"/>
        </div>
        <div className='favoritesHeaderTitle'>
          MY FAVORITES
        </div>
        {this.props.favoritos.map(favorito => 
          <div key={favorito}>
            <WeatherWindow weatherId={favorito}/>
            <img src={separator} alt="separator" title="separator"/>
          </div>
        )}
      </div>
    );
  }
}
