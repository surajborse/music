import React, { useState } from 'react'
import { CgSearch } from 'react-icons/cg';
import { HiOutlineChevronLeft } from 'react-icons/hi';

import { Music } from '../AllData'
import Filter from './Filter';
import MusicList from './MusicList.js';

function Category({ Catback, setCurrentsong, play, setPlay }) {


    const [musicdata, setMusicdata] = useState(Music)
    const [serachactive, setSerachactive] = useState(false)
    const [search, setSearch] = useState("");



    return (
        <div className='category audiolist'  >

            <div className="header">

                <div className="pre-btn " onClick={Catback}>
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

            <Filter setMusicdata={setMusicdata} />

            <MusicList setCurrentsong={setCurrentsong} search={search} musicdata={musicdata} play={play} setPlay={setPlay} />

        </div>
    )
}

export default Category