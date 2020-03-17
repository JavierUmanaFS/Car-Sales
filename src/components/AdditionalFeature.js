import React from 'react';
import { buyItem } from '../actions/carActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>

      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => { props.buyItem(props.feature) }}
      >Add</button>

      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { buyItem })(AdditionalFeature);
