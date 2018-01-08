import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class BestStocksComponent extends Component {
  componentDidMount () {
    this.props.getBestStocks ();
  }

  renderBestStocks () {
    if (this.props.BestStock) {
      console.log (this.props.BestStock);
      return this.props.BestStock.data.map (val => {
        return (
          <li className="collection-item avatar">
            <h4>{val.Symbol}</h4>
            <p>
              <b>High :</b>{val.High} <br />
              <b>Low :</b>{val.Low}
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
        );
      });
    }
  }

  render () {
    return (
      <div className="card padding">
      <center><h4>Top 100 Stocks</h4></center>
        <ul className="collection">
        {this.renderBestStocks ()}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps (state) {
  return {BestStock: state.BestStock};
}

export default connect (mapDispatchToProps, actions) (BestStocksComponent);
