import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Order = () => {
  return (
    <div style={{ width: '1150px', border: '1px solid rgb(130,130,130)' }}>
      <div className="orders">
        <div>Order ID</div>
        <div>Status</div>
        <div>Items Qty</div>
        <div>Total</div>
      </div>
      <div className="orders-value">
        <div>7463hbvhbtreshs28325</div>
        <div>Processing</div>
        <div>1</div>
        <div>US$ 120</div>
        <div>
          <IoMdArrowForward className="order-details-icons" />
        </div>
      </div>
      <div className="change-page">
        <div>
          1-1 of 1
          <div>
            <IoArrowBackCircleOutline className="change-page-icon" />
            <IoArrowForwardCircleOutline className="change-page-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
