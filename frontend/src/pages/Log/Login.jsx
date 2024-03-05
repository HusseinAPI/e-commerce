import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, changeProfile } from '../../store/AuthSlice';

const Login = () => {
  const [remember, setRemember] = useState(false);
  const { user } = useSelector((state) => state.AuthSlice);
  const { registered } = useSelector((state) => state.AuthSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  useEffect(() => {
    if (registered) {
      email.current.value = '';
      password.current.value = '';
      dispatch(changeProfile(user.profileImg));
      navigate('/Profile');
    }
  }, [registered, dispatch, navigate, user]);

  useEffect(() => {
    console.log(remember);
  }, [remember]);

  const checkData = () => {
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    if (data.email.length !== 0 && data.password.length !== 0) {
      dispatch(logIn(data));
    }
  };

  return (
    <div className="block-backg">
      <div>
        <h1>Login to your account</h1>
        <div className="login-container">
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
              justifyContent: 'space-between',
              width: '420px',
              color: 'rgb(29, 29, 255)',
            }}
          >
            <input
              type="checkbox"
              style={{ width: '15px', marginBottom: '5px' }}
              onClick={() => setRemember(true)}
            />
            <div
              style={{ margin: '3px 110px 0 0', color: 'rgb(101, 101, 101)' }}
            >
              Remember me
            </div>
            <span style={{ margin: '2px 0 0 0' }}>Forget your password?</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '460px',
            }}
          >
            <button onClick={checkData}>Submit</button>
          </div>
          <div>
            Not have any account?
            <span
              style={{
                marginLeft: '5px',
                color: 'rgb(29, 29, 255)',
              }}
              onClick={() => {
                navigate('/signup');
              }}
            >
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
