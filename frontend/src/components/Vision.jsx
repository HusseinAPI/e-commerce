import React from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { visionProductCart, showProductDetails } from '../store/ShopSlice';
import { setFavourite } from '../store/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

const Vision = ({ elem }) => {
  const { favourite } = useSelector((state) => state.ShopSlice);
  const { visionImage } = useSelector((state) => state.ShopSlice);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="black-back-block"
        onClick={() => {
          dispatch(visionProductCart(false));
          dispatch(showProductDetails(null));
        }}
      ></div>
      <div className="vision-container">
        <div className="product-img-container">
          <img
            src={require(`../images/${visionImage.img}`)}
            alt=""
            style={{
              height: '272px',
            }}
          />
        </div>
        <div className="product-details-container">
          <span>{visionImage.name}</span>
          <p>
            Product details are a crucial part of any eCommerce website or
            online marketplace. These details help the potential customers to
            make an informed decision about the product they are interested in
            buying. A well-written product description can also be a powerful
            marketing tool that can help to increase sales.The product details
            section should also include high-quality images and videos of the
            product, as well as customer reviews and ratings.
          </p>
          <span
            style={{
              width: '100%',
              color: 'rgb(61, 61, 61)',
              fontSize: '18px',
              fontWeight: '700',
            }}
          >
            ${visionImage.price}
          </span>
          <div>
            <div className="count-btn-container">
              <div className="count-btn-left">-</div>
              <div className="count-btn-number">1</div>
              <div className="count-btn">+</div>
            </div>
            {favourite ? (
              <IoMdHeart
                style={{
                  width: '27px',
                  height: '27px',
                  color: 'rgb(255, 0, 0)',
                  margin: '23px 20px',
                  cursor: 'pointer',
                }}
                onClick={() => dispatch(setFavourite(false))}
              />
            ) : (
              <IoMdHeartEmpty
                style={{
                  width: '27px',
                  height: '27px',
                  color: 'rgb(61, 61, 61)',
                  margin: '23px 20px',
                  cursor: 'pointer',
                }}
                onClick={() => dispatch(setFavourite(true))}
              />
            )}
          </div>
          <div>
            <button onClick={() => dispatch(visionProductCart(false))}>
              Add to cart
              <AiOutlineShoppingCart
                style={{
                  width: '18px',
                  height: '18px',
                  color: 'rgb(255, 224, 224)',
                  cursor: 'pointer',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
