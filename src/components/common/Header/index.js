import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">Logo</div>
      <div className="user-details">
        <i className="far fa-heart">
          <span>2</span>
        </i>
        <span>Find Offers</span>
        <span>Messages</span>
        <i className="fas fa-user-circle"></i>
      </div>
    </div>
  );
};

export default Header;
