//import cool things from redux to help us
//establish the store
import { createStore } from 'redux';


//create actions that will be performed to
//adjust the state

//action for when we buy arrrcoins
export const buyAction = {
  type: 'BUY',
}

//when we want to sell arrrcoins
export const sellAction = {
  type: 'SELL',
}
//when the exchange rate updates
export const exRateAction = {
  type: 'UPDATE',
}

//set the initial exchange rate, which will be updated several lines below.
let exchangeRate=1;

//function used to create a random interval between 0 and 10
// (Using whole numbers for simplicity)
export function randomizeRate(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return exchangeRate = Math.floor(Math.random() * (max - min + 1)) + min; //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

//when acceptable actions are performed, we update the state accordingly
export function reducer(state, action) {
  //if the action performed is a buy and we have atlease 1 arrrcoin to trade in
  if (action.type === 'BUY' && state.arrrcoins >= 1){
      return { doubloons: state.doubloons + exchangeRate,
               arrrcoins: state.arrrcoins - 1,
               exchangeRate: exchangeRate,
      }
  }

  //if the action performed is a sell
  if (action.type === 'SELL' && state.doubloons >= exchangeRate){
      return { doubloons: state.doubloons - exchangeRate,
               arrrcoins: state.arrrcoins + 1,
               exchangeRate: exchangeRate,
      }
  }

  //when the update action is performed
  if (action.type === 'UPDATE'){

      randomizeRate(0,10);
      return { doubloons: state.doubloons,
               arrrcoins: state.arrrcoins,
               exchangeRate: exchangeRate
      }
  }

  //return the initial state if none of the actions have been performed
  return state;
}

//set the initial values for state
export const store = createStore(reducer, {
  doubloons: 10,
  arrrcoins: 10,
  exchangeRate: exchangeRate,
},
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
