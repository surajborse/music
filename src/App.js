import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import MusicTab from './Component/MusicTab';
import AudioList from './Component/AudioList';
import { useEffect, useState } from 'react';
import Footer from './Component/Footer';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Music } from './AllData';
import ScaleLoader from "react-spinners/ScaleLoader";
import Category from './Component/Category';
import Profile from './Component/Profile';

function App() {

  const [list, setList] = useState(false)
  const [category, setCategory] = useState(false)
  const [currentsong, setCurrentsong] = useState(Music[0])
  const [loader, setLoader] = useState(false)
  const [profileactive, setProfileactive] = useState(false)
  const [play, setPlay] = useState(false)


  const backbnt = () => {
    setList(false)
  }

  const Catback = () => {
    setCategory(false)
  }


  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  }, [])

  return (
    <div className="App" >
      <div className={profileactive ? "music-app event" : "music-app"} >
        {

          loader ?
            <div className='loader'>
              <ScaleLoader
                height="60"
                width="5"
                color={"#FA0C4C"}
                loading={loader}
              />
            </div>
            :

            <div>
              <Header />
              <Home />
              <MusicTab setList={setList} />

              {
                list && <AudioList backbnt={backbnt} setCurrentsong={setCurrentsong} play={play} setPlay={setPlay} />
              }

              {
                category && <Category Catback={Catback} setCurrentsong={setCurrentsong} play={play} setPlay={setPlay} />
              }

              <div className='d-flex justify-content-around '>
                <button onClick={() => setList(true)} className="all-music" > All Music </button>
                <button onClick={() => setCategory(true)} className="all-music" > All category  </button>
              </div>

              <Profile setProfileactive={setProfileactive} profileactive={profileactive} />


              <Footer currentsong={currentsong}
                setCurrentsong={setCurrentsong} setProfileactive={setProfileactive} profileactive={profileactive} play={play} setPlay={setPlay} />
            </div>

        }
      </div>
    </div>
  );
} 

// https://163.53.177.139/user_uploads/2/42/bYfojjxv9OnXi6oUxSGoJX1I/pasted_image.png

export default App;


