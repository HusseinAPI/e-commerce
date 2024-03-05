import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const Address = () => {
  return (
    <>
      <div className="payment-header">
        <h2>Payment Methods</h2>
        <button>Add New</button>
      </div>
      <div className="payment-list">
        <div>Default</div>
        <div>Nabatieh,South Lebanon</div>
        <div>+1 637 6262</div>
        <div>
          <AiOutlineDelete className="change-page-icon" />
        </div>
      </div>
    </>
  );
};

export default Address;
