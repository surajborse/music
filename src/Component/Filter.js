import React, { useState } from 'react'
import { Music } from '../AllData'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

function Filter({ setMusicdata }) {

    const [showoption, setShowoption] = useState(false)

    const [option, setOption] = useState("All")


    const allCatValues = ["All", ...new Set(Music.map((Curelm) => Curelm.category)),];

    const filterItem = (catItem) => {

        if (catItem === "All") {
            setMusicdata(Music);
            return
        }
        const updateItems = Music.filter((curElem) => {
            return curElem.category === catItem;
        })
        setMusicdata(updateItems)
    }



    return (
        <div>
            < div className='main-category'  >
                
                <div className="filter-category">
                    {
                        showoption ? <AiFillCaretUp className="downarrow" onClick={() => setShowoption(!showoption)} /> : <AiFillCaretDown className="downarrow" onClick={() => setShowoption(!showoption)} />
                    }
                    <p> {option} </p>
                </div>

                {
                    showoption &&
                    <div className="option-box" >
                        <ul>
                            {
                                allCatValues.map((curEleme, i) => {
                                    return (
                                        <div key={i}>
                                            <li onClick={() => filterItem(curEleme) || setShowoption(!showoption) || setOption(curEleme)}  > {curEleme} </li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }

            </ div>
        </div>
    )
}

export default Filter