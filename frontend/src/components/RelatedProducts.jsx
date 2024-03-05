import React from 'react';
import { LuEye } from 'react-icons/lu';
import {
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { visionProductCart } from '../store/ShopSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Vision from '../components/Vision';

const RelatedProducts = () => {
  const vision = useSelector((state) => state.ShopSlice.vision);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="related-products-container">
      {vision ? <Vision /> : null}
      <div className="product-container">
        <div>
          <div className="pic-and-option">
            <img
              src={require('../images/s24.png')}
              alt=""
              style={{
                width: '242px',
                height: '192px',
              }}
              onClick={() => navigate('/product')}
            />
            <div>
              <IoMdHeartEmpty className="product-icons" />
              <LuEye
                className="product-icons"
                onClick={() => dispatch(visionProductCart(true))}
              />
              <AiOutlineShoppingCart className="product-icons" />
            </div>
          </div>
          <div className="best-product-details">
            <div style={{ width: 'auto' }}>S24 Ultra 512GB Titanium Blue</div>
            <div className="stars-container" style={{ marginTop: '18px' }}>
              <AiFillStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
              <AiFillStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
              <AiFillStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
              <AiFillStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
              <AiOutlineStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
            </div>
            <div style={{ fontSize: '17px', marginTop: '10px' }}>
              $999
              <span
                style={{
                  position: 'relative',
                  marginLeft: '10px',
                  fontSize: '14px',
                  color: 'rgb(101, 101, 101)',
                }}
              >
                $1299
                <div className="line-sold"></div>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="pic-and-option">
            <img
              src={require('../images/s24.png')}
              alt=""
              style={{
                width: '242px',
                height: '192px',
              }}
              onClick={() => navigate('/product')}
            />
            <div>
              <IoMdHeartEmpty className="product-icons" />
              <LuEye
                className="product-icons"
                onClick={() => dispatch(visionProductCart(true))}
              />
              <AiOutlineShoppingCart className="product-icons" />
            </div>
          </div>
          <div className="best-product-details">
            <div style={{ width: 'auto' }}>S24 Ultra 512GB Titanium Blue</div>
            <div className="stars-container" style={{ marginTop: '18px' }}>
              <AiFillStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
              <AiFillStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
              <AiFillStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
              <AiFillStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
              <AiOutlineStar
                className="product-icons"
                style={{ color: 'rgb(199, 199, 19)' }}
              />
            </div>
            <div style={{ fontSize: '17px', marginTop: '10px' }}>
              $999
              <span
                style={{
                  position: 'relative',
                  marginLeft: '10px',
                  fontSize: '14px',
                  color: 'rgb(101, 101, 101)',
                }}
              >
                $1299
                <div className="line-sold"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
