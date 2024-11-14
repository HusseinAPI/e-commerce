import React, { useRef } from 'react';
import { LuUser2 } from 'react-icons/lu';
import { IoCameraOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileImg, updateUserInfo } from '../../store/AuthSlice';

const Profile = () => {
  const { profileImg } = useSelector((state) => state.AuthSlice);
  const user = useSelector((state) => state.AuthSlice.user);

  const fullName = useRef();
  const email = useRef();
  const phone = useRef();
  const postalCode = useRef();
  const address = useRef();

  const dispatch = useDispatch();

  const updateData = () => {
    if (
      fullName.current.value.length !== 0 &&
      email.current.value.length !== 0 &&
      phone.current.value.length !== 0 &&
      postalCode.current.value.length !== 0 &&
      address.current.value.length !== 0
    ) {
      const data = {
        userId: user._id,
        profileImg: profileImg,
        fullName: fullName.current.value,
        email: email.current.value,
        phone: phone.current.value,
        postalCode: postalCode.current.value,
        address: address.current.value,
        token: user.token,
      };
      dispatch(updateUserInfo(data));
      fullName.current.value = '';
      email.current.value = '';
      phone.current.value = '';
      postalCode.current.value = '';
      address.current.value = '';
    }
  };

  return (
    <>
      <div className="profile-pic">
        <div>
          {profileImg !== null ? (
            <img
              src={require(`../../images/${profileImg}`)}
              alt=""
              style={{ width: '200px', height: '200px' }}
            />
          ) : (
            <LuUser2
              style={{ width: '90%', height: '90%', color: 'rgb(101,101,101)' }}
            />
          )}
          <div className="change-pic">
            <label htmlFor="fileInput">
              <IoCameraOutline />
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
        </div>
      </div>
      <div className="user-info">
        <div>
          <label>Full Name</label>
          <input type="text" ref={fullName}></input>
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" ref={email}></input>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" ref={phone}></input>
        </div>
        <div>
          <label>Postal Code</label>
          <input type="text" ref={postalCode}></input>
        </div>
        <div>
          <label>Address</label>
          <input type="text" ref={address}></input>
        </div>
        <div>
          <button onClick={() => updateData()}>Update</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
