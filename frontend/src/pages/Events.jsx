import React from 'react';

const Events = () => {
  return (
    <div className="events">
      <div>
        <h2>Best Events</h2>
        <div className="events-container">
          <div className="events-img-container">
            <img src={require('../images/s24.png')} alt="" />
          </div>
          <div className="events-description">
            <p>S24 Ultra 512GB Titanium Blue</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus aliquam impedit asperiores eveniet qui placeat vel
              vero ut blanditiis, earum laudantium quibusdam praesentium sit
              repellat molestiae, recusandae quas illo dolorum?Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Provident, veritatis
              doloribus dolor ipsum sunt distinctio reiciendis quibusdam porro
              quasi asperiores inventore vero mollitia. Corrupti quod, impedit
              quibusdam nulla sint ab?
            </span>
            <div className="events-price">
              <span>
                $1299<div className="line"></div>
              </span>
              $999
            </div>
            <p
              style={{
                marginTop: '20px',
                color: 'rgb(43, 102, 228)',
                fontSize: '24px',
              }}
            >
              1 days 3 hours 43 minutes 41 seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
