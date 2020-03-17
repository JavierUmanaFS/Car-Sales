import React from 'react';
import { createStore } from 'redux';
import { carReducer } from './reducer/carReducer';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { BUY_ITEM } from './actions/carActions';

export const store = createStore(carReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = props => {
  console.log('aaaaaaaa', props)
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  //const removeFeature = item => {
  // dispatch an action here to remove an item
  //};

  // const buyItem = item => {

  // };

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

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};
export default connect(mapStateToProps, { BUY_ITEM })(App);

