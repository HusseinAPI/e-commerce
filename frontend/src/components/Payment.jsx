import React, { useState } from 'react';
import { changeCheckPage } from '../store/ShopSlice';
import { useDispatch } from 'react-redux';

const Payment = () => {
  const [paymentMethod, setMethod] = useState('credit');

  const dispatch = useDispatch();

  const orderSuccessfuly = () => {
    dispatch(changeCheckPage('success'));
  };

  return (
    <div className="shipping-container">
      <div className="payment-address">
        <div className="shipping-address-info">
          <div>
            <input
              type="radio"
              checked={paymentMethod === 'credit' ? true : false}
              name="payment"
              onClick={() => setMethod('credit')}
            />
            <label style={{ width: '535px', fontWeight: '500' }}>
              Pay with Debit/Credit card
            </label>
          </div>
          {paymentMethod === 'credit' ? (
            <>
              <div>
                <label>Card Number</label>
                <label>Exp Date</label>
                <input type="text" />
                <input type="text" />
              </div>
              <div>
                <label>Name on Card</label>
                <label>Building Address</label>
                <input type="text"></input>
                <input type="text"></input>
              </div>
              <div style={{ justifyContent: 'flex-start', marginLeft: '18px' }}>
                <button
                  className="payment-button"
                  onClick={() => {
                    orderSuccessfuly();
                  }}
                >
                  Submit
                </button>
              </div>
            </>
          ) : null}
          <div>
            <input
              type="radio"
              checked={paymentMethod === 'paypal' ? true : false}
              name="payment"
              onClick={() => setMethod('paypal')}
            />
            <label style={{ width: '535px', fontWeight: '500' }}>
              Pay with Paypal
            </label>
          </div>
          {paymentMethod === 'paypal' ? (
            <>
              <div style={{ marginRight: '307px' }}>
                <label style={{ marginLeft: '18px' }}>Paypal Email</label>
                <input
                  type="text"
                  style={{ width: '550px', marginLeft: '175px' }}
                />
              </div>
              <div style={{ justifyContent: 'flex-start', marginLeft: '18px' }}>
                <button
                  className="payment-button"
                  onClick={() => {
                    orderSuccessfuly();
                  }}
                >
                  Submit
                </button>
              </div>
            </>
          ) : null}
          <div>
            <input
              type="radio"
              checked={paymentMethod === 'cash' ? true : false}
              name="payment"
              onClick={() => setMethod('cash')}
            />
            <label style={{ width: '535px', fontWeight: '500' }}>
              Cash on Delivery
            </label>
          </div>
          {paymentMethod === 'cash' ? (
            <div style={{ justifyContent: 'flex-start', marginLeft: '23px' }}>
              <button
                className="payment-button"
                onClick={() => {
                  orderSuccessfuly();
                }}
              >
                Confirm
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="shipping-invoice" style={{ height: ' 230px' }}>
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
      </div>
    </div>
  );
};

export default Payment;
