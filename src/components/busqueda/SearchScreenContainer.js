import SearchScreen from './SearchScreen';
import { connect } from 'react-redux';
import * as rootActions from '../../actions/RootActions';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buscarResultado: (ciudad, pais) => dispatch(rootActions.buscarResultado(ciudad, pais)),
    goToFavs: () => dispatch(rootActions.goToScreen('favoritos'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
