import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import actions from store
import { buyAction, sellAction, exRateAction, reducer } from './store';

//import redux
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);

    setInterval(this.props.update, 2000);
  }

  render() {


    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div>
          <ul>
            <li><p>doubloons: {this.props.doubloons}</p></li>
            <li><p>arrrcoins: {this.props.arrrcoins}</p></li>
            <li><p>exchange rate: {this.props.exchangeRate}</p></li>
          </ul>
        </div>
        <div className="buttons">

          <button onClick={() => this.props.buy()}>Buy</button>

          <button onClick={() => this.props.sell()}>Sell</button>
        </div>

      </div>
    );
  }
}

  //bring in the state info from the store and set it as props
  function mapStateToProps(state) {
    return{
      doubloons: state.doubloons,
      arrrcoins: state.arrrcoins,
      exchangeRate: state.exchangeRate
    }
  }

  //connect functions from the app to actions
  //in the store so we can modify state
  function mapActionsToProps(dispatch) {
    return {
      buy: function(){
        dispatch(buyAction);
      },
      sell: function(){
        dispatch(sellAction);
      },
      update: function(){
        dispatch(exRateAction);
      }
    }
  }


export default connect(mapStateToProps, mapActionsToProps)(App);
