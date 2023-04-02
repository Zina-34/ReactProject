import React from 'react'
import './profile.css';
import Navbar from './Navbar';
import image from '../images/profile.jpg'

const Profiles = (user) => {
    const {id, name, email, address, phone} = user;
  return (
    <>
        <Navbar />
        <div className="profilesAll">
            <div className="profilesPage">
                <img src={image}/>
                <div className="profileFig">
                    Name: {name};
                    Email: {email};
                    Phone: {phone};
                    Address: {address};

                </div>
                <div className="ProfileDetail">

                </div>
            </div>
        </div>
    </>
  )
}

export default Profiles
