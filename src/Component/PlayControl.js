import React from 'react'
import { AiOutlinePause } from 'react-icons/ai'
import { MdPlayArrow } from 'react-icons/md'
import { TbPlayerSkipBack, TbPlayerSkipForward } from 'react-icons/tb'

function PlayControl({ currentsong, starttiming, endtiming, play, checkWidth, clicref, playPuase, next, Back, formatTime , }) {


    return (
        <div>
            <div className='main-play mt-5'>

                <div className="play-box">
                    {
                        play && <div className='before'></div>
                    }
                    <img src={currentsong.Image} className={` img-fluid ${play ? "scroll-img" : ''}`} alt="" />
                </div>

                <h3> {currentsong.title} </h3>
                <h5> {currentsong.subtitle} </h5>

                <div className="range" onClick={checkWidth} ref={clicref}>
                    <div className="range-time " style={{ width: `${currentsong.progress + "%"}` }}></div>
                </div>

                <div className='d-flex justify-content-between  time'>
                    <p> {starttiming} </p>
                    <p> {endtiming} </p>
                </div>

                <div className="navigate-music">
                    <TbPlayerSkipBack onClick={Back} />
                    <div className='audio-play'  >
                        {
                            play ? <AiOutlinePause onClick={playPuase} /> : <MdPlayArrow onClick={playPuase} />
                        }
                    </div>
                    <TbPlayerSkipForward onClick={next} />
                </div>

            </div>
        </div>
    )
}

export default PlayControl



