import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, setProfileImg } from '../../store/AuthSlice';

const LogOut = ({ setLogConfirm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="block-backg" onClick={() => setLogConfirm(false)}>
      <div className="confirm-logout">
        <h3>Are You Sure to Log Out ?</h3>
        <div>
          <button className="red-btn" onClick={() => setLogConfirm(false)}>
            Cancel
          </button>
          <button
            className="blue-btn"
            onClick={() => {
              dispatch(logout());
              dispatch(setProfileImg(null));
              navigate('/login');
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
