import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const Payment = () => {
  return (
    <>
      <div className="payment-header">
        <h2>Payment Methods</h2>
        <button>Add New</button>
      </div>
      <div className="payment-list">
        <div>
          <img src={require('../../images/visa.png')} alt="" />
          Hussein Kassab
        </div>
        <div>
          1243 <sup>**** **** ***</sup> 08/2024
        </div>
        <div>
          <AiOutlineDelete className="change-page-icon" />
        </div>
      </div>
    </>
  );
};

export default Payment;
