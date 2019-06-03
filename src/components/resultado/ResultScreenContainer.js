import ResultScreen from './ResultScreen';
import { connect } from 'react-redux';
import * as rootActions from '../../actions/RootActions';

const mapStateToProps = state => {
  return {
    ciudad: state.resultCiudad,
    pais: state.resultPais
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToSearch: () => dispatch(rootActions.goToScreen('busqueda'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);
