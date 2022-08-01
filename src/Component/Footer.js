import React, { useEffect, useRef, useState } from 'react'
import { BsChevronDoubleUp } from "react-icons/bs"
import { Music } from '../AllData'
import PlayControl from './PlayControl'
import MiniPlay from './MiniPlay'
function Footer({ setCurrentsong, currentsong  , setProfileactive , profileactive  , play , setPlay }) {


    const [slideup, setSlideup] = useState(false)

    // const [data, setData] = useState(Music)

    // const [play, setPlay] = useState(false)

    const [starttiming, setStartiming] = useState(0)

    const [endtiming, setEndtiming] = useState(0)


    const audioElem = useRef();
    const clicref = useRef();

    // play and pause buttun =====-======

    useEffect(() => {
        if (play) {
            audioElem.current.play();
        }
        else {
            audioElem.current.pause();
        }



    }, [play, currentsong])

    
    // music time duration 
   useEffect(() => {
        function formatTime(audioTime) {
            if (audioTime && !isNaN(audioTime)) {
                const minutes = Math.floor(audioTime / 60) < 10 ? `0${Math.floor(audioTime / 60)}` : Math.floor(audioTime / 60);
                const second = Math.floor(audioTime % 60) < 10 ? `0${Math.floor(audioTime % 60)}` : Math.floor(audioTime % 60);
                return `${minutes}:${second}`;
            }
            return '00:00'
        }
        const endtime = Math.floor(audioElem?.current?.duration);
        const startTime = Math.floor(audioElem?.current?.currentTime);

        setEndtiming(formatTime(endtime))
        setStartiming(formatTime(startTime))
    })

    // pause buttun 
    const playPuase = () => {
        setPlay(!play)
    }

    // play button ====
    const onplaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;
        setCurrentsong({ ...currentsong, "progress": ct / duration * 100, "length": duration })
    }

    // controll with ======
    const checkWidth = (e) => {

        let width = clicref.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentsong.length
    }

    // back button ===
    const Back = () => {
        const index = Music.findIndex(x => x.title === currentsong.title && currentsong.subtitle)
        if (index === 0) {
            setCurrentsong(Music[Music.length - 1])
        }
        else {
            setCurrentsong(Music[index - 1])
        }
        audioElem.current.currentTime = 0
    }

    // next button 

    const next = () => {
        const index = Music.findIndex(x => x.title === currentsong.title && currentsong.subtitle)
        if (index === Music.length - 1) {
            setCurrentsong(Music[0])
        }
        else {
            setCurrentsong(Music[index + 1])
        }
        audioElem.current.currentTime = 0

    }



    return (
        <div className={slideup ? "active fix-footer" : " fix-footer "}>

            <audio src={currentsong.audio} ref={audioElem} onTimeUpdate={onplaying} />
            <div className={`top text-center ${slideup ? "btn-scroll" : ""}`}    >
                <BsChevronDoubleUp onClick={() => setSlideup(!slideup)}/>
            </div>

            {
                !slideup &&
                <MiniPlay
                    currentsong={currentsong}
                    play={play}
                    playPuase={playPuase}
                    setProfileactive={setProfileactive}
                    profileactive={profileactive}
                />
            }


            {
                slideup &&
                <PlayControl
                    currentsong={currentsong}
                    play={play}
                    checkWidth={checkWidth}
                    clicref={clicref}
                    playPuase={playPuase}
                    next={next}
                    Back={Back}
                    endtiming={endtiming}
                    starttiming={starttiming}

                />
            }

        </div >
    )
}

export default Footer
