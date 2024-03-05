import React, { useEffect } from 'react';
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

const Category = () => {
  const { catgProducts } = useSelector((state) => state.ShopSlice);
  const { vision } = useSelector((state) => state.ShopSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="best" style={{ marginTop: '30px' }}>
      {vision ? <Vision /> : null}
      <div className="product-container">
        {catgProducts.length !== 0
          ? catgProducts.map((elem, index) => (
              <div key={index}>
                <div className="pic-and-option">
                  <img
                    src={require(`../images/${elem.img}`)}
                    alt=""
                    style={{
                      width: `${elem.width}px`,
                      height: `${elem.height}px`,
                      marginTop: '20px',
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
                  <div style={{ width: 'auto' }}>{elem.name}</div>
                  <div
                    className="stars-container"
                    style={{ marginTop: '18px' }}
                  >
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
                    ${elem.price}
                    <span
                      style={{
                        position: 'relative',
                        marginLeft: '10px',
                        fontSize: '14px',
                        color: 'rgb(101, 101, 101)',
                      }}
                    >
                      {elem.sold !== null ? (
                        <>
                          ${elem.sold}
                          <div className="line-sold"></div>
                        </>
                      ) : null}
                    </span>
                  </div>
                </div>
              </div>
            ))
          : 'No Products in This category'}
      </div>
    </div>
  );
};

export default Category;
