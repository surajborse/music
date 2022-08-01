
import React, { useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import { HiOutlineChevronLeft } from "react-icons/hi"
import { Music } from '../AllData'
import MusicList from './MusicList';


function AudioList({ backbnt, setCurrentsong , play , setPlay }) {

    const [musicdata,] = useState(Music)
    const [search, setSearch] = useState("");
    const [serachactive, setSerachactive] = useState(false)


   

    return (

        <div className='audiolist'>

            <div className="header">
                <div className="pre-btn " onClick={backbnt}>
                    <HiOutlineChevronLeft />
                </div>
                {
                    <div className='seach-box mt-0 ms-4'>
                        <input type="text" className={`${serachactive ? " search-acticve" : ""} search-input`} placeholder='Search Music' onChange={(e) => {
                            setSearch(e.target.value.trim());
                        }} />
                    </div>
                }
                <div className="search" onClick={() => setSerachactive(!serachactive)} >
                    <CgSearch />
                </div>
            </div>

            <MusicList setCurrentsong={setCurrentsong} search={search} musicdata={musicdata}  play={play} setPlay={setPlay}  />

        </div>
    )
}

export default AudioList