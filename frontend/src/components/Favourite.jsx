import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa6';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { showFavourite } from '../store/ShopSlice';
import { useDispatch, useSelector } from 'react-redux';

const Favourite = () => {
  const { favourite } = useSelector((state) => state.AuthSlice);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="black-back-block"
        onClick={() => dispatch(showFavourite(false))}
      ></div>
      <div className="cart-container">
        <div className="close" onClick={() => dispatch(showFavourite(false))}>
          <AiOutlineClose className="change-page-icon" />
        </div>
        <div className="number-items">
          <FaRegHeart className="change-page-icon" /> {favourite.length - 1}
          items
        </div>
        {favourite.length !== 0
          ? favourite.map((elem) => (
              <div style={{ borderBottom: '1px solid rgb(101, 101, 101)' }}>
                <div className="edit-fav-count-item">
                  <AiOutlineClose
                    className="delete-item-icon"
                    style={{ width: '10px', height: '10px' }}
                  />
                </div>
                <div>
                  <img
                    src={require(`../images/${elem.img}`)}
                    alt=""
                    className="add-list-img"
                  />
                </div>
                <div className="favourite-item-description">
                  {elem.name}
                  <span className="item-price">${elem.price}</span>
                </div>
                <div>
                  <TbShoppingCartPlus
                    className="change-page-icon"
                    style={{
                      margin: '50px 10px',
                    }}
                  />
                </div>
              </div>
            ))
          : 'Favourite List Empty'}
      </div>
    </>
  );
};

export default Favourite;
