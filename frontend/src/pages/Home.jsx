import React from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { RxReload } from 'react-icons/rx';
import { BsTrophy } from 'react-icons/bs';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { LuEye } from 'react-icons/lu';
import {
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  closeCateg,
  selectCategory,
  selectNavPage,
  showProductDetails,
  visionProductCart,
} from '../store/ShopSlice';
import Favourite from '../components/Favourite';
import Cart from '../components/Cart';
import Vision from '../components/Vision';

const Home = () => {
  const { products } = useSelector((state) => state.ShopSlice);
  const { vision } = useSelector((state) => state.ShopSlice);
  const { favouriteList } = useSelector((state) => state.ShopSlice);
  const { cartList } = useSelector((state) => state.ShopSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {vision ? <Vision /> : null}
      {favouriteList ? <Favourite /> : null}
      {cartList ? <Cart /> : null}
      <div
        className="home-pic-container"
        onClick={() => {
          dispatch(closeCateg(false));
        }}
      >
        <div>
          <div className="title">
            Best Collection For <br />
            Home Decoration
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            corrupti? Eum quo ad cum nulla eius fuga neque voluptas,
            consectetur, dolorum voluptates cumque amet impedit, facere est ipsa
            eligendi. Repellendus.
          </p>
          <button
            onClick={() => {
              dispatch(selectNavPage('products'));
              navigate('/products');
            }}
          >
            shop now
          </button>
        </div>
      </div>
      <div className="services">
        <div className="services-container">
          <div>
            <div>
              <LiaShippingFastSolid className="services-icons" />
            </div>
            <div>
              <p>
                Free Shipping
                <br />
                <span>From all orders oveer 100$</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <RxReload className="services-icons" />
            </div>
            <div>
              <p>
                Daily Surprise Offers
                <br />
                <span>Save up to 25% off</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <BsTrophy className="services-icons" />
            </div>
            <div>
              <p>
                Affortable Prices
                <br />
                <span>Get Factory direct price</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <RiSecurePaymentLine className="services-icons" />
            </div>
            <div>
              <p>
                Secure Payments
                <br />
                <span>100% protected Payments</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-categories">
        <div className="categories-container">
          <div
            onClick={() => {
              dispatch(selectCategory('computer'));
              dispatch(selectNavPage('products'));
              navigate('/products/category');
            }}
          >
            <p>
              Computers <br />
              and laptops
            </p>
            <img src={require('../images/laptop.jpg')} alt="" />
          </div>

          <div
            onClick={() => {
              dispatch(selectCategory('accesories'));
              dispatch(selectNavPage('products'));
              navigate('/products/category');
            }}
          >
            <p>Accesories</p>
            <img
              src={require('../images/accesories.png')}
              alt=""
              style={{ width: '265px', height: '247px', margin: '-32px' }}
            />
          </div>

          <div
            onClick={() => {
              dispatch(selectCategory('clothes'));
              dispatch(selectNavPage('products'));
              navigate('/products/category');
            }}
          >
            <p>Clothes</p>
            <img src={require('../images/clothes.png')} alt="" />
          </div>

          <div
            onClick={() => {
              dispatch(selectCategory('shoes'));
              dispatch(selectNavPage('products'));
              navigate('/products/category');
            }}
          >
            <p>Shoes</p>
            <img src={require('../images/shoess.jpg')} alt="" />
          </div>

          <div
            onClick={() => {
              dispatch(selectCategory('gifts'));
              dispatch(selectNavPage('products'));
              navigate('/products/category');
            }}
          >
            <p>Gifts</p>
          </div>

          <div
            onClick={() => {
              dispatch(selectCategory('mobile'));
              dispatch(selectNavPage('products'));
              navigate('/products/category');
            }}
          >
            <p>
              Mobile <br />
              and Tablets
            </p>
            <img
              src={require('../images/phone.jpg')}
              alt=""
              style={{ width: '275px', height: '175px' }}
            />
          </div>

          <div
            onClick={() => {
              dispatch(selectCategory('music'));
              dispatch(selectNavPage('products'));
              navigate('/products/category');
            }}
          >
            <p>
              Music <br />
              and Gaming
            </p>
            <img
              src={require('../images/headSet.jpg')}
              alt=""
              style={{ width: '190px', height: '190px' }}
            />
          </div>

          <div
            onClick={() => {
              dispatch(selectCategory('others'));
              dispatch(selectNavPage('products'));
              navigate('/products/category');
            }}
          >
            <p>Others</p>
            <img
              src={require('../images/other.png')}
              alt=""
              style={{ width: '150px', height: '150px' }}
            />
          </div>
        </div>
      </div>
      <div className="best">
        <h2>Best Deals</h2>
        <div className="best-container">
          {products.length !== 0
            ? products.map((elem, index) => {
                if (index < 5) {
                  return (
                    <div>
                      <div className="pic-and-option">
                        <img
                          src={require(`../images/${elem.img}`)}
                          alt=""
                          style={{
                            width: `${elem.width}px`,
                            height: `${elem.height}px`,
                          }}
                        />
                        <div>
                          <IoMdHeartEmpty className="product-icons" />
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
                            ${elem.sold}
                            <div className="line-sold"></div>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })
            : null}
        </div>
      </div>
      <div className="events">
        <div>
          <h2>Best Events</h2>
          <div className="events-container">
            <div className="events-img-container">
              <img src={require('../images/s24.png')} alt="" />
            </div>
            <div className="events-description">
              <p>S24 Ultra 512GB Titanium Blue</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus aliquam impedit asperiores eveniet qui placeat vel
                vero ut blanditiis, earum laudantium quibusdam praesentium sit
                repellat molestiae, recusandae quas illo dolorum?Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Provident,
                veritatis doloribus dolor ipsum sunt distinctio reiciendis
                quibusdam porro quasi asperiores inventore vero mollitia.
                Corrupti quod, impedit quibusdam nulla sint ab?
              </span>
              <div className="events-price">
                <span>
                  $1299<div className="line"></div>
                </span>
                $999
              </div>
              <p
                style={{
                  marginTop: '20px',
                  color: 'rgb(43, 102, 228)',
                  fontSize: '24px',
                }}
              >
                1 days 3 hours 43 minutes 41 seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
