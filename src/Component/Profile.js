import React from 'react'
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { MdFavoriteBorder } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { BiUserCircle } from 'react-icons/bi'

function Profile({ profileactive, setProfileactive }) {
    return (
        <div className={profileactive ? " profile" : " profiletwo profile  "}>
            <button onClick={() => setProfileactive(false)} >   <IoMdClose />  </button>

            <div className="pro-box  py-3">

                <div className="pro-img-box mt-5">
                    <img className='img-fluid' src="https://i.pinimg.com/originals/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg" alt="profile" />
                </div>

                <div className="box text-center">
                    <p>Suraj Borse</p>
                </div>

                <div className="profile-list">
            
                    <div>
                        <ul>
                            <li>
                                <AiOutlineHome />  Home
                            </li>

                            <li>
                                <BiUserCircle />   About
                            </li>

                            <li>
                                <MdFavoriteBorder />  Favorite
                            </li>

                            <li>
                                <FiSettings />  Setting
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <AiOutlineLogout /> Logout
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}



export default Profile