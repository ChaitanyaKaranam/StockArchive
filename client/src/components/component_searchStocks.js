import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import StockDetailComponent from './component_stockDetail';

class SearchStocksComponent extends Component {
  constructor (props) {
    super (props);
    this.state = {
      symbol: '',
      currentSymbol: '',
      preloader:false,
      preloader5:false,
      realTime:false
    };
  }

  search (symbol) {
    let temp = symbol;
    this.setState ({symbol: temp});    
  }

  searchStocks () {
    this.props.searchStocks (this.state.symbol);
    this.setState ({currentSymbol: this.state.symbol});
    this.setState({preloader:true});
    this.setState({realTime:true});
  }

  renderSearchStock () {
    if (this.props.SearchStock) {      
      let arr = [this.props.SearchStock.data['Time Series (1min)']];
      let count = 0;
      return arr.map (val => {
        if (count < 1) {
          count += 1;
          let temp = val[Object.keys (val)[0]];
          let title = this.state.currentSymbol;
          if(this.state.realTime){
            Materialize.toast('Real-Time data is now Updated!', 4000);
            this.setState({realTime:false});
          }
          
          return (
            <div>
              <div className="card padding">
                <div className="card-title">
                  <h4>{title}</h4>
                </div>
                <div>
                  <b>Open: </b>{temp['1. open']}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Close: </b>{temp['4. close']}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <b>High: </b>{temp['2. high']}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Low: </b>{temp['3. low']}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {this.renderPercentage (temp['1. open'], temp['4. close'])}
                </div>
                <br />
                <div className="input-field col s12 l4 m4">
                  <a
                    className="waves-effect waves-light btn"
                    onClick={() => {
                      this.getStockDetails (title);
                    }}
                  >
                    <i className="material-icons right">search</i>Details
                  </a>
                </div>
              </div>
            </div>
          );
        }
      });
    }
    else{
      if(this.state.preloader){
        return(
          <div>
            <h5 className="grey-text">Fetching Real-time Data...</h5>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          </div>  
        )
      }     
     
    }
  }

  renderPercentage (open, close) {
    if (close > open) {
      let pc = (close - open) / close * 100;
      return (
        <span>
          <i className="green-text material-icons">arrow_upward</i>{pc}%
        </span>
      );
    } else {
      let pc = -((close - open) / close * 100);
      return (
        <span>
          <i className="red-text material-icons">arrow_downward</i>{pc}%
        </span>
      );
    }
  }

  getStockDetails(symbol){
    this.props.getStock(symbol);
    this.setState({preloader5:true});
  }

  render () {
      return (
        <div>
          <div className="row">
            <div className="input-field col s12 l8 m8">
              <input
                onChange={event => {
                  this.search (event.target.value);
                }}
                type="text"
                className="autocomplete"
              />
              <label htmlFor="autocomplete-input">Search by Symbol</label>
            </div>
            <div className="input-field col s12 l4 m4">
              <a
                className="waves-effect waves-light btn"
                onClick={() => {
                  this.searchStocks ();
                }}
              >
                <i className="material-icons right">search</i>Search Stocks
              </a>
            </div>
          </div>
          <br />
          <div>
            {this.renderSearchStock ()}
          </div>
          <div>
            <StockDetailComponent preloader={this.state.preloader5}/>
          </div>  
        </div>
      );  
   
  }
}

function mapDispatchToProps (state) {
  return {SearchStock: state.SearchStock};
}

export default connect (mapDispatchToProps, actions) (SearchStocksComponent);
