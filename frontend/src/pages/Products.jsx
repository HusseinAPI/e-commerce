import React from 'react';
import { LuEye } from 'react-icons/lu';
import {
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa6';
import {
  showProductDetails,
  visionProductCart,
  setFavouriteZerOne,
} from '../store/ShopSlice';
import { setFavourite } from '../store/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Vision from '../components/Vision';

const Products = () => {
  const { user } = useSelector((state) => state.AuthSlice);
  const { products } = useSelector((state) => state.ShopSlice);
  const { vision } = useSelector((state) => state.ShopSlice);
  const { favourite } = useSelector((state) => state.AuthSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setFavouriteHandler = (element, answer) => {
    const data = {
      id: user._id,
      product: element,
      favourite: answer,
    };
    dispatch(setFavourite(data));
    // dispatch(changeFavouriteIcon(element));

    products.forEach((elem) => {
      favourite.forEach((el) => {
        if (elem._id === el._id) {
          dispatch(setFavouriteZerOne(data));
          console.log('true');
        } else {
          console.log('faalse');
        }
      });
      console.log('end');
    });
  };

  return (
    <div className="best" style={{ marginTop: '30px' }}>
      {vision ? <Vision /> : null}
      <div className="product-container">
        {products.length !== 0
          ? products.map((elem, index) => (
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
                    {products.favourite ? (
                      <FaHeart
                        className="product-icons"
                        style={{
                          width: '18px',
                          height: '18px',
                          marginLeft: '2px',
                        }}
                        onClick={() => setFavouriteHandler(elem, false)}
                      />
                    ) : (
                      <IoMdHeartEmpty
                        className="product-icons"
                        onClick={() => setFavouriteHandler(elem, true)}
                      />
                    )}
                    <LuEye
                      className="product-icons"
                      onClick={() => {
                        dispatch(visionProductCart(true));
                        dispatch(showProductDetails(elem));
                      }}
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
          : 'No Products Here'}
      </div>
    </div>
  );
};

export default Products;

//db.products.insertMany([{name:'Apple iPhone 15 Pro Max (256 GB) - Black Titanium',price:1199,sold: ,img:'iphone15.jpg',width:'242',height:'160'},
