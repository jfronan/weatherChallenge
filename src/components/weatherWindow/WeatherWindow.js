import React from 'react';
import {consultWeather, consultWeatherById} from '../../utils/apiCalls';
import '../../App.css';
import './WeatherWindow.css';

import corazonActive from '../../assets/corazon.png';
import corazonOff from '../../assets/unselecCora.png';
import shareIcon from '../../assets/share.png';


export default class WeatherWindow extends React.Component {

  constructor(props) {
    super();
    this.state = {
      ciudad: '',
      pais: '',
      temperatura: '',
      humedad: '',
      weatherId: ''
    };
  }

  componentDidMount() {
    const consultService = () => {
      if (this.props.weatherId) {
        return consultWeatherById(this.props.weatherId)
      }
       return consultWeather(this.props.ciudad, this.props.pais)
    }
    consultService()
    .then(weatherResult => {
      console.log(weatherResult);
      this.setState({
        ciudad: weatherResult.name,
        pais: weatherResult.sys.country,
        temperatura: Math.floor(weatherResult.main.temp - 273)+' C',
        humedad: Math.floor(weatherResult.main.humidity)+'%',
        weatherId: weatherResult.id
      })
    })
  }

  render() {
    return (
      <div id="personajesContainer" className="relative fullWidth">
        <div className='flexRow fullWidth topIconsContainer'>
          <div className='clickFeedback hoverPoint' onClick={()=> this.props.toggleResultFromFav(this.state.weatherId)}>
            {this.props.favoritos.includes(this.state.weatherId)
              ? <img src={corazonActive} alt="favoritoOn" title="FavOn"/>
              : <img src={corazonOff} alt="FavoritoOff" title="FavOff"/>
            }
          </div>
          <div className='clickFeedback hoverPoint' onClick={()=> alert(`https://openweathermap.org/city/${this.state.weatherId}`)}>
            <img src={shareIcon} alt="compartir" title="Share"/>
          </div>
        </div>

        <div className={this.props.fullscreen ? 'verticalMargin16' : 'negativeTopMargin25'}>
          <div className='labelTitle'>
            LOCATION
          </div>
          <div className='bigTitle'>
            {this.state.ciudad + ', ' + this.state.pais}
          </div>
          <div className='flexRow spaceAround'>
            <div>
              <div className='labelTitle'>
                TEMPERATURE
              </div>
              <div className='middleTitle'>
                {this.state.temperatura}
              </div>
            </div>
            <div>
              <div className='labelTitle'>
                HUMIDITY
              </div>
              <div className='middleTitle'>
                {this.state.humedad}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
