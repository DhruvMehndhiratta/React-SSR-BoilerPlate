import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';

const OfferCards = () => {
  return (
    <div className="cards-container">
      <div className="info-section">
        <Tabs defaultActiveKey="photo">
          <Tab eventKey="photo" title="Photo/Video">
            <img
              src="https://i.ytimg.com/vi/uH2N2gmjhl0/maxresdefault.jpg"
              alt="tutorial-video"
            />
          </Tab>
          <Tab eventKey="info" title="Info">
            <div className="info">
              Hi! Thank you for taking the time to look into me! My name is
              Luke, and I currently reside in London. I'm originally from
              Bedford, and spent a few years in Coventry, having graduated from
              Coventry University with a degree in History and Politics. From
              there I have worked for a variety of industries, including high
              end fashi... read more
            </div>
          </Tab>
          <Tab eventKey="calendar" title="Calendar">
            <span>Calender</span>
          </Tab>
        </Tabs>
      </div>
      <div className="detail-section">
        <h6 className="title">
          FLOW STATE{' '}
          <span>
            4.0 <i class="far fa-star"></i>
          </span>
        </h6>
        <h6 className="name">Alexander Berger</h6>
        <span className="filters">Categorie • All Level • 45 min</span>
        <span className="location">
          Rotterdam • Vogelenzangseweg 182, 2114 BD, Vogelenzang, NH{' '}
        </span>
        <span className="event-date">Sun, 20 October • 20:00 </span>
        <div className="booking-section">
          <Button variant="dark" size="sm">
            Book
          </Button>
          <div className="fees">1 lesson - EUR 17</div>
          <i class="far fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default OfferCards;
