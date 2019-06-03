import React from 'react';
import { connect } from 'react-redux';
import * as rootActions from '../actions/RootActions';
import './MainContainer.css';

import SearchScreen from './busqueda/SearchScreenContainer'
import ResultScreen from './resultado/ResultScreenContainer'
import FavouritesScreen from './favoritos/FavouritesScreenContainer'

class MainContainer extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="tabletSizeBox">
        {(() => {
            switch(this.props.pageShowing) {
            case 'busqueda':
                return (
                    <SearchScreen/>
                );
            case 'resultado':
                return (
                    <ResultScreen/>
                );
            case 'favoritos':
                return (
                    <FavouritesScreen/>
                );
            default:
                return null;
            }
        })()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageShowing: state.pageShowing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // alternarCombateMapa: () => dispatch(rootActions.alternarCombateMapa())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
