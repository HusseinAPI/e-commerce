import React from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { visionProductCart } from '../store/ShopSlice';
import { setFavourite } from '../store/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import RelatedProducts from '../components/RelatedProducts';

const SelectedProduct = () => {
  const favourite = useSelector((state) => state.ShopSlice.favourite);
  const dispatch = useDispatch();
  return (
    <>
      <div className="selected-product-container">
        <div className="selected-product-img-container">
          <img
            src={require('../images/s24.png')}
            alt=""
            style={{
              position: 'absolute',
              top: '14%',
              left: '8%',
              width: '520px',
              height: '392px',
            }}
          />
          <div
            style={{
              backgroundColor: 'rgb(250,250,250)',
              boxShadow: '1px 1px 5px 1px rgb(101,101,101) inset',
              cursor: 'pointer',
            }}
          >
            <img
              src={require('../images/s24.png')}
              alt=""
              style={{
                width: '242px',
                height: '192px',
              }}
            />
          </div>
          <div
            style={{
              cursor: 'pointer',
            }}
          >
            <img
              src={require('../images/s24.png')}
              alt=""
              style={{
                width: '242px',
                height: '192px',
              }}
            />
          </div>
        </div>
        <div className="selected-product-details-container">
          <span>S24 Utra 512GB Titanium Blue</span>
          <p>
            Product details are a crucial part of any eCommerce website or
            online marketplace. These details help the potential customers to
            make an informed decision about the product they are interested in
            buying. A well-written product description can also be a powerful
            marketing tool that can help to increase sales.Product details
            typically include information about the product's features,
            specifications, dimensions, weight, materials, and other relevant
            information that can help customers to understand the product
            better. The product details section should also include high-quality
            images and videos of the product, as well as customer reviews and
            ratings.
          </p>
          <span
            style={{
              width: '100%',
              color: 'rgb(61, 61, 61)',
              fontSize: '18px',
              fontWeight: '700',
            }}
          >
            $999
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
          <div style={{ marginTop: '0px' }}>
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
      <RelatedProducts />
    </>
  );
};

export default SelectedProduct;
