import React, { Component } from 'react';
import BestStocksComponent from './component_bestStocks';
import SearchStocksComponent from './component_searchStocks';
import StockDetailComponent from './component_stockDetail';

export default class App extends Component {
  render() {
    return (
      <div>       
        <nav>
          <div className="blue-grey darken-4 nav-wrapper">
            <a href="#" className="brand-logo padding">Stock Archives</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            </ul>
          </div>
        </nav>
        <br/>
        <div className="container">
        <SearchStocksComponent/>    
        <BestStocksComponent/>        
        </div>      
        
      </div>
    );
  }
}
