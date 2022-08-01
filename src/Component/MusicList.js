import React from 'react'

function MusicList({ musicdata, search, setCurrentsong, setPlay , play }) {
    return (

        <div className='main-list'>

            {
                musicdata.filter((val) => {
                    if (!search) {
                        return val;
                    } else
                        if (
                            val.title.toLowerCase().includes(search.toLowerCase()) || val.subtitle.toLowerCase().includes(search.toLowerCase())
                        ) {
                            return val;
                        }
                }).map((e, index) => {
                    return (

                        <div className="list" key={index} onClick={() => {
                            setCurrentsong(e) || setPlay(true)
                        }}>
                            <div className="music-img">
                                <img src={e.Image} className='img-fluid' alt="" />
                                
                            </div>
                            <div className=" ms-3 music-content">
                                <p> {e.title} </p>
                                <p> {e.subtitle} </p>
                            </div>


                        </div>
                    )
                })
            }

        </div>



    )
}

export default MusicList