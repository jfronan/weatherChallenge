import FavouritesScreen from './FavouritesScreen';
import { connect } from 'react-redux';
import * as rootActions from '../../actions/RootActions';

const mapStateToProps = state => {
  return {
    favoritos: state.favoritos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToSearch: () => dispatch(rootActions.goToScreen('busqueda'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesScreen);
