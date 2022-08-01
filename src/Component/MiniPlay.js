import React from 'react'
import { AiOutlineHome, AiOutlinePause } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'
import { MdPlayArrow } from 'react-icons/md'
import Profile from './Profile'
// import wave from "../img/wave.png"

function MiniPlay({ currentsong, play, playPuase , setProfileactive, }) {
    return (
        <div>
            <>
                <div className=''>
                    <div className="list justify-content-between">
                        <div className='d-flex'>
                            <div className="music-img">
                                <img src={currentsong.Image} className={` img-fluid ${play ? "scroll-img" : ''}`} alt="" />
                            </div>
                            <div className=" ms-3 music-content">
                                <p>{currentsong.title} </p>
                                <p> {currentsong.subtitle} </p>
                            </div>
                            {/* {
                                 play ? 
                                   <img className='music-gif' src="https://media0.giphy.com/media/LIQKmZU1Jm1twCRYaQ/giphy.gif?cid=ecf05e476yc03yt8k222bdsnapqg4h2rcm0fswyorg3321k5&rid=giphy.gif&ct=s" alt="" /> 
                                   :
                                   null
                            } */}
                           

                        </div>
                        <div className='d-flex me-2'>
                            <div className='play-btn me-2' >
                                {
                                    play ? <AiOutlinePause onClick={playPuase} /> : <MdPlayArrow onClick={playPuase} />
                                }
                            </div>
                            {/* <AiOutlinePause /> */}

                            <div className='play-btn'>
                                <IoMdClose />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="menu">
                    <div className="home">
                        <AiOutlineHome /><br />
                        <p>Home</p>
                    </div>
                    <div className="home " onClick={() => setProfileactive(true) }>
                        <CgProfile /> <br />
                        <p>Pofile</p>
                    </div>
                </div>


          
            </>
        </div>
    )
}

export default MiniPlay

