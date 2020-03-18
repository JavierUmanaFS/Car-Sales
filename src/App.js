import React from 'react';
// Imported to create redux store
import { createStore } from 'redux';
// Imported to set inside store
import { carReducer } from './reducer/carReducer';
//  Imported to bridge react & redux
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// Creating store with state from carReducer 
export const store = createStore(carReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//  App gets props/data from 'mSTP' from connect below
const App = props => {

  return (
    <div className="boxes">
      <div className="box">
        <Header
          car={props.car}

        />
        <AddedFeatures
          car={props.car}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
        />
        <Total
          car={props.car}
          additionalPrice={props.additionalPrice}

        />
      </div>
    </div>
  );
};

// Passing in state that we want App to have as props
const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

// Connecting App to store, passing in new props, and any actions we want
export default connect(mapStateToProps, {
  // Actions go here ?
})(App);

