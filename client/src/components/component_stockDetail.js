import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class StockDetailComponent extends Component{

    renderStockDetail(){
        if(this.props.GetStock){
            Materialize.toast('5 Week data is now available!', 4000)
            let arr = [this.props.GetStock.data['Weekly Time Series']];
            return arr.map(val=>{
                let tempArr = [];
                for(let count=0;count<5;count++){
                    console.log(count);                    
                    tempArr.push(val[Object.keys (val)[count]]);
                }
                let weekCount = 0;
                return tempArr.map(val=>{
                    let title = 'Details';
                    weekCount ++ ;
                    console.log(val);
                    return (
                      <li className="collection-item">
                            <h5>Week {weekCount}</h5>
                            <b>Open: </b>{val['1. open']}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <b>Close: </b>{val['4. close']}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <b>High: </b>{val['2. high']}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <b>Low: </b>{val['3. low']}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {this.renderPercentage (val['1. open'], val['4. close'])}
                      </li>
                    );
                })                   
                
            })
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

    render(){
        if(this.props.GetStock){
            return(
                <div className="card padding">
                    <h4>Details</h4>
                    <ul className="collection">
                    {this.renderStockDetail()}
                    </ul>    
                    
                </div>    
            )
        }
        else{
            if(this.props.preloader){
                return(
                    <div>
                      <h5 className="grey-text">Fetching 5-Week Data...</h5>
                      <div className="progress">
                        <div className="indeterminate"></div>
                      </div>
                    </div>  
                  )
            }
            else{
                return <div></div>
            }           
        }

    }
}

function mapDispatchToProps(state){
    return{GetStock:state.GetStock}
}

export default connect(mapDispatchToProps,actions)(StockDetailComponent);