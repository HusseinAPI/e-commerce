import React, { useState } from 'react';
import { LuUser2 } from 'react-icons/lu';
import { IoBagOutline } from 'react-icons/io5';
import { TbArrowBackUp } from 'react-icons/tb';
import { MdTrackChanges } from 'react-icons/md';
import { MdOutlinePayment } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import ProfileInfo from '../components/Profile/ProfileInfo';
import Order from '../components/Profile/Order';
import Payment from '../components/Profile/Payment';
import Address from '../components/Profile/Address';
import LogOut from '../components/Profile/LogOut';

const Profile = () => {
  const [logConfirm, setLogConfirm] = useState(false);

  return (
    <div className="profile">
      <div className="profile-menu">
        <div>
          <LuUser2 className="profile-menu-icon" />
          Profile
        </div>
        <div>
          <IoBagOutline className="profile-menu-icon" />
          Orders
        </div>
        <div>
          <TbArrowBackUp className="profile-menu-icon" />
          Refunds
        </div>
        <div>
          <MdTrackChanges className="profile-menu-icon" />
          Track Order
        </div>
        <div>
          <MdOutlinePayment className="profile-menu-icon" />
          Address
        </div>
        <div
          onClick={() => {
            setLogConfirm(true);
          }}
        >
          <CiLogout className="profile-menu-icon" />
          Log Out
        </div>
      </div>
      <div className="profile-info">
        <ProfileInfo />
        {/* <Order /> */}
        {/* <Payment /> */}
        {/* <Address /> */}
        {logConfirm ? <LogOut setLogConfirm={setLogConfirm} /> : null}
      </div>
    </div>
  );
};

export default Profile;
