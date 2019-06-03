import WeatherWindow from './WeatherWindow';
import { connect } from 'react-redux';
import * as rootActions from '../../actions/RootActions';

const mapStateToProps = state => {
  return {
    favoritos: state.favoritos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleResultFromFav: (weatherId) => dispatch(rootActions.toggleResultFromFav(weatherId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWindow);
