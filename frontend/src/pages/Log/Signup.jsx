import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, setProfileImg } from '../../store/AuthSlice';

const Signup = () => {
  const { registered } = useSelector((state) => state.AuthSlice);
  const { profileImg } = useSelector((state) => state.AuthSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fullName = useRef();
  const email = useRef();
  const password = useRef();

  useEffect(() => {
    if (registered) {
      fullName.current.value = '';
      email.current.value = '';
      password.current.value = '';
      navigate('/Profile');
    }
  }, [registered, dispatch, navigate]);

  const sendData = () => {
    const data = {
      fullName: fullName.current.value,
      email: email.current.value.toLowerCase(),
      password: password.current.value,
      profileImg: profileImg,
    };
    if (data.email.length !== 0 && data.password.length !== 0) {
      dispatch(signUp(data));
    }
  };

  return (
    <div className="block-backg">
      <div>
        <h1>Register as a new user</h1>
        <div className="login-container">
          <div>
            <label>Full name</label>
            <input type="text" ref={fullName} />
          </div>
          <div>
            <label>Email address</label>
            <input type="text" ref={email} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" ref={password} />
          </div>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              width: '420px',
              color: 'rgb(29, 29, 255)',
            }}
          >
            {profileImg !== null ? (
              <img src={require(`../../images/${profileImg}`)} alt="" />
            ) : (
              <FaRegCircleUser
                style={{
                  width: '29px',
                  height: ' 29px',
                  color: 'rgb(101, 101, 101)',
                  cursor: 'pointer',
                }}
              />
            )}
            <label
              htmlFor="fileInput"
              className="file-label"
              style={{ margin: '0 0 0 10px', height: '25px' }}
            >
              Upload a file
            </label>
            <input
              type="file"
              id="fileInput"
              className="file-input"
              onChange={(e) => {
                dispatch(setProfileImg(e.target.files));
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '460px',
            }}
          >
            <button
              onClick={() => {
                sendData();
              }}
            >
              Submit
            </button>
          </div>
          <div>
            Already have an account?
            <span
              style={{
                marginLeft: '5px',
                color: 'rgb(29, 29, 255)',
              }}
              onClick={() => {
                navigate('/login');
              }}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
