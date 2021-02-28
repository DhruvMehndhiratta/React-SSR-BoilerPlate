import React from 'react';
import { FormControl } from 'react-bootstrap';

const FindOffer = () => {
  return (
    <div className="offer-container">
      <h6>Find an offer to achieve your goals</h6>
      <FormControl
        type="text"
        placeholder="Find an offer"
        className="mr-sm-2"
      />
    </div>
  );
};

export default FindOffer;
