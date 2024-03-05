import React from 'react';
import { AiOutlineClose, AiFillMinusCircle } from 'react-icons/ai';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { IoIosAddCircle } from 'react-icons/io';
import { showCart, selectNavPage } from '../store/ShopSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="black-back-block"
        onClick={() => dispatch(showCart(false))}
      ></div>
      <div className="cart-container">
        <div className="close" onClick={() => dispatch(showCart(false))}>
          <AiOutlineClose className="change-page-icon" />
        </div>
        <div className="number-items">
          <LiaShoppingBagSolid className="change-page-icon" /> 3 items
        </div>
        <div>
          <div className="edit-count-item">
            <IoIosAddCircle
              className="change-page-icon"
              style={{ color: 'rgb(244,13,13)' }}
            />
            <span>1</span>
            <AiFillMinusCircle
              className="change-page-icon"
              style={{ color: 'rgb(101,101,101)' }}
            />
          </div>
          <div>
            <img
              src={require('../images/watch.jpg')}
              alt=""
              className="add-list-img"
            />
          </div>
          <div className="item-description">
            Casio Men's G-Shock Move GBD-H2000
            <span className="item-description-span">$374 * 1</span>
            <span className="item-price">$374</span>
          </div>
          <div>
            <AiOutlineClose
              className="delete-item-icon"
              style={{ width: '10px', height: '10px' }}
            />
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(showCart(false));
              dispatch(selectNavPage(null));
              navigate('/checkout');
            }}
          >
            CheckOut now (USD$374)
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
