import React from 'react';
import FindOffer from '../common/FindOffer';
import Badge from '../common/Badge';
import OfferCards from '../common/OfferCards';

import { Row, Container } from 'react-bootstrap';

const badgeList = [
  'Location',
  'Choose Class',
  'Date',
  'Level',
  'Teacher',
  'Duration',
  'Languages',
  'Categories'
];

const Home = () => {
  return (
    <div className="dashboard">
      <FindOffer />
      <Container>
        <Row>
          <div className="badges-list">
            <i class="fas fa-times"></i>
            {badgeList.map(item => (
              <Badge name={item} />
            ))}
          </div>
        </Row>
        <h5>
          Find the best Offer for you. <span>100 offers</span>
        </h5>
        {[...Array(10)].map(item => (
          <OfferCards />
        ))}
      </Container>
    </div>
  );
};

export default Home;
