import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaHeart, FaCartShopping, FaRegCircleUser } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeCateg,
  selectNavPage,
  showFavourite,
  showCart,
  getProducts,
  selectCategory,
} from '../store/ShopSlice';
import { setFavourite } from '../store/AuthSlice';

const Navigation = () => {
  const { user } = useSelector((state) => state.AuthSlice);
  const { categClick } = useSelector((state) => state.ShopSlice);
  const { pageSelect } = useSelector((state) => state.ShopSlice);
  const { registered } = useSelector((state) => state.AuthSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setFavouriteHandler = (element) => {
    const data = {
      id: user._id,
      product: element,
    };
    dispatch(setFavourite(data));
  };

  return (
    <div className="nav-container">
      <div
        className="nav-categories"
        onClick={() => {
          dispatch(closeCateg(!categClick));
          dispatch(getProducts());
        }}
      >
        <div>
          <BiMenuAltLeft className="menu" />
          All Categories
        </div>
        <IoIosArrowDown />
        {categClick ? (
          <div className="nav-categories-list">
            <div
              onClick={() => {
                dispatch(selectCategory('computer'));
                navigate('/products/category');
              }}
            >
              <img
                src={require('../images/laptop-removebg-preview.png')}
                alt=""
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'transparent',
                }}
              />
              <div>Computers and laptops</div>
            </div>
            <div
              onClick={() => {
                dispatch(selectCategory('accesories'));
                navigate('/products/category');
              }}
            >
              <img
                src={require('../images/accesories.png')}
                alt=""
                style={{ width: '40px', height: '40px' }}
              />
              <div>Accesories</div>
            </div>

            <div
              onClick={() => {
                dispatch(selectCategory('clothes'));
                navigate('/products/category');
              }}
            >
              <img
                src={require('../images/clothes.png')}
                alt=""
                style={{ width: '40px', height: '40px' }}
              />
              <div>Clothes</div>
            </div>

            <div
              onClick={() => {
                dispatch(selectCategory('shoes'));
                navigate('/products/category');
              }}
            >
              <img
                src={require('../images/shoess-removebg-preview.png')}
                alt=""
                style={{ width: '40px', height: '40px' }}
              />
              <div>Shoes</div>
            </div>

            <div
              onClick={() => {
                dispatch(selectCategory('mobile'));
                navigate('/products/category');
              }}
            >
              <img
                src={require('../images/phone-removebg-preview.png')}
                alt=""
                style={{ width: '40px', height: '40px' }}
              />
              <div>Mobile and Tablets</div>
            </div>

            <div
              onClick={() => {
                dispatch(selectCategory('music'));
                navigate('/products/category');
              }}
            >
              <img
                src={require('../images/headSet-removebg-preview.png')}
                alt=""
                style={{ width: '40px', height: '40px' }}
              />
              <div>Music and Gaming</div>
            </div>

            <div
              onClick={() => {
                dispatch(selectCategory('others'));
                navigate('/products/category');
              }}
            >
              <img
                src={require('../images/other.png')}
                alt=""
                style={{ width: '40px', height: '40px' }}
              />
              <div>Others</div>
            </div>
            <div>Gifts</div>
          </div>
        ) : null}
      </div>
      <div className="pages-link">
        <NavLink
          to="/"
          className="link"
          style={pageSelect === 'home' ? { color: 'rgb(255, 255, 0)' } : null}
          onClick={() => {
            dispatch(selectNavPage('home'));
            dispatch(getProducts());
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="link"
          style={
            pageSelect === 'products' ? { color: 'rgb(255, 255, 0)' } : null
          }
          onClick={() => {
            dispatch(selectNavPage('products'));
            dispatch(getProducts());
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="/events"
          className="link"
          style={pageSelect === 'events' ? { color: 'rgb(255, 255, 0)' } : null}
          onClick={() => dispatch(selectNavPage('events'))}
        >
          Events
        </NavLink>
        <NavLink
          to="/faq"
          className="link"
          style={pageSelect === 'faq' ? { color: 'rgb(255, 255, 0)' } : null}
          onClick={() => dispatch(selectNavPage('faq'))}
        >
          FAQ
        </NavLink>
      </div>
      <div className="nav-products-option">
        <FaHeart
          className="nav-icon-opt"
          onClick={() => {
            dispatch(showFavourite(true));
            setFavouriteHandler({ type: 'getFavourite' });
          }}
        />
        <FaCartShopping
          className="nav-icon-opt"
          onClick={() => dispatch(showCart(true))}
        />
        <FaRegCircleUser
          className="nav-icon-opt"
          onClick={() => {
            dispatch(selectNavPage(null));
            registered ? navigate('/profile') : navigate('/login');
          }}
        />
      </div>
    </div>
  );
};

export default Navigation;
