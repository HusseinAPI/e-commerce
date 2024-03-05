import React from 'react';
import Shipping from '../components/Shipping';
import Payment from '../components/Payment';
import { changeCheckPage } from '../store/ShopSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaCircleCheck } from 'react-icons/fa6';

const CheckOut = () => {
  const checkPage = useSelector((state) => state.ShopSlice.checkPage);
  const dispatch = useDispatch();

  return (
    <div className="checkout-container">
      <div className="checkout-nav">
        <div
          className="nav-field selected"
          onClick={() => dispatch(changeCheckPage('shipping'))}
        >
          1.Shipping
        </div>
        <div className="nav-line"></div>
        <div
          className={
            checkPage === 'payment'
              ? 'nav-field selected'
              : checkPage === 'success'
              ? 'nav-field selected'
              : 'nav-field'
          }
          onClick={() => dispatch(changeCheckPage('payment'))}
        >
          2.Payment
        </div>
        <div className="nav-line"></div>
        <div
          className={
            checkPage === 'success' ? 'nav-field selected' : 'nav-field'
          }
        >
          3.Success
        </div>
      </div>
      {checkPage === 'shipping' ? (
        <Shipping />
      ) : checkPage === 'payment' ? (
        <Payment />
      ) : (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ marginBottom: '150px' }}>
            <div style={{ width: '100%', height: '250px' }}>
              <FaCircleCheck className="success-icon" />
            </div>
            <span className="success-span">Your Order is successfuly</span>
          </div>
        </div>
      )}
      {checkPage === 'shipping' ? (
        <div className="payment-btn-container">
          <button
            className="go-to-button"
            onClick={() => dispatch(changeCheckPage('payment'))}
          >
            Go to payment
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CheckOut;
