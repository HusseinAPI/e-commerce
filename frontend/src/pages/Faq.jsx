import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Faq = () => {
  return (
    <div className="faq-container">
      <h2>FAQ</h2>
      <div>
        What is your return policy?
        <IoIosArrowForward style={{ width: '21px', height: '21px' }} />
      </div>
      <div>
        How do I track my order?
        <IoIosArrowForward style={{ width: '21px', height: '21px' }} />
      </div>
      <div>
        How do I contact customer support?
        <IoIosArrowForward style={{ width: '21px', height: '21px' }} />
      </div>
      <div>
        Can I change or cancel my order?
        <IoIosArrowForward style={{ width: '21px', height: '21px' }} />
      </div>
      <div>
        Do you offer international shipping?
        <IoIosArrowForward style={{ width: '21px', height: '21px' }} />
      </div>
      <div>
        What payment methods do you accept?
        <IoIosArrowForward style={{ width: '21px', height: '21px' }} />
      </div>
    </div>
  );
};

export default Faq;
