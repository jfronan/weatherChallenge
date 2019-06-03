import React from 'react';
import WeatherWindow from '../weatherWindow/WeatherWindowContainer';

import flechaAtras from '../../assets/flechaAtras.png';

export default class ResultScreen extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="fill relative">
        <div className='returnArrow clickFeedback hoverPoint' onClick={()=> this.props.goToSearch()}>
          <img src={flechaAtras} alt="Volver" title="Volver"/>
        </div>
        <WeatherWindow ciudad={this.props.ciudad} pais={this.props.pais} fullscreen={true}/>
      </div>
    );
  }
}
