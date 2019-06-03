import React from 'react';
import '../../App.css';
import './Search.css';

export default class SearchScreen extends React.Component {

  constructor(props) {
    super();
    this.state = {
        citySearchValue: "",
        countrySearchValue: ""
    };
  }

  render() {
    return (
      <div className="flex fill centerContent">
        <div className='bigTitle'>
            Weather Finder
        </div>
        <div className='verticalMargin16 fullWidth'>
            <div>
                <input
                    id="city"
                    type="text"
                    className="searchBar"
                    placeholder="City"
                    value={this.state.citySearchValue}
                    onChange={(event)=> this.setState({citySearchValue: event.target.value})}
                />
            </div>
            <div>
                <input
                    id="country"
                    type="text"
                    className="searchBar"
                    placeholder="Country"
                    value={this.state.countrySearchValue}
                    onChange={(event)=> this.setState({countrySearchValue: event.target.value})}
                />
            </div>
            <div className='searchButton clickFeedback hoverPoint' onClick={()=> {
                if (this.state.citySearchValue !== '') {
                    this.props.buscarResultado(this.state.citySearchValue, this.state.countrySearchValue)
                }
            }}>
                SEARCH
            </div>
            <div className='favLink hoverPoint' onClick={()=> {this.props.goToFavs()}}>
                GO TO MY FAVORITES
            </div>
        </div>
      </div>
    );
  }
}
