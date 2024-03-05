import React, { useState } from 'react';

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  const countriesAndCities = {
    Lebanon: ['Beirut', 'Nabatieh', 'Saida', 'Tyr', 'Tripoli'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
    UK: ['London', 'Manchester', 'Birmingham'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
  };

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCities(countriesAndCities[country] || []);
  };

  return (
    <div className="shipping-container">
      <div className="shipping-address">
        <div className="shipping-address-info">
          <div>
            <label>Full Name</label>
            <label>Email Address</label>
            <input type="text"></input>
            <input type="text"></input>
          </div>
          <div>
            <label>Phone Number</label>
            <label>Zip Code</label>
            <input type="password"></input>
            <input type="text"></input>
          </div>
          <div>
            <label>Country:</label>
            <label>City:</label>
            <select
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">Select a country</option>
              {Object.keys(countriesAndCities).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <select>
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div style={{ width: '250px' }}>
            <label>Address</label>
            <input type="text"></input>
          </div>
        </div>
      </div>
      <div className="shipping-invoice">
        <div>
          <span>subtotal:</span>
          <span className="invoice-price">$374.00</span>
        </div>
        <div>
          <span>shipping:</span>
          <span className="invoice-price">-</span>
        </div>
        <div>
          <span>Discount:</span>
          <span className="invoice-price">-</span>
          <hr style={{ width: '340px' }}></hr>
        </div>
        <div style={{ justifyContent: 'flex-end' }}>
          <span style={{ fontSize: '22px' }} className="invoice-price">
            $374.00
          </span>
        </div>
        <div>
          <input type="text" placeholder="Coupon code " />
        </div>
        <div>
          <button>Apply Code</button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
