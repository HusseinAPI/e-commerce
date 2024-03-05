import React, { useRef } from 'react';
import { IoSearch } from 'react-icons/io5';
import { TbBrandMailgun } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  filterProducts,
  showSearchList,
  selectNavPage,
} from '../store/ShopSlice';

const Header = () => {
  const { searchValue } = useSelector((state) => state.ShopSlice);
  const { productsFilter } = useSelector((state) => state.ShopSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchInput = useRef();

  return (
    <div className="header-container">
      <div className="store-title">
        <div
          onClick={() => {
            navigate('/');
            dispatch(selectNavPage('home'));
          }}
        >
          <TbBrandMailgun />
          Shop<span>O</span>
        </div>
      </div>
      <div className="search-container">
        <div style={searchValue ? { marginTop: '25px' } : null}>
          <input
            type="text"
            placeholder="Search Product..."
            ref={searchInput}
            onBlur={() => dispatch(showSearchList(false))}
            onChange={() => {
              if (searchInput.current.value.length !== 0) {
                dispatch(showSearchList(true));
                dispatch(filterProducts(searchInput.current.value));
              } else {
                dispatch(showSearchList(false));
              }
            }}
          />
          <IoSearch className="search-icon" />
        </div>
        {searchValue ? (
          <div className="item-search-list">
            {productsFilter.length !== 0 ? (
              productsFilter.map((elem, index) => (
                <div key={index}>
                  <img
                    src={require(`../images/${elem.img}`)}
                    alt=""
                    style={{
                      width: '25px',
                      height: '35px',
                      backgroundColor: 'transparent',
                    }}
                  />
                  <div style={{ margin: '7px 10px' }}>{elem.name}</div>
                </div>
              ))
            ) : (
              <div>
                <div style={{ margin: '7px 10px' }}>No search results</div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
