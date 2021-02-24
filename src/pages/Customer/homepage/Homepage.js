import React from 'react';

import DonDiablo_into_the_unknown from "../../../assets/DonDiablo_into_the_unkown.PNG"
import music1 from "../../../assets/pictures/music/1.png";
import music2 from "../../../assets/pictures/music/2.jpeg";
import music3 from "../../../assets/pictures/music/3.jpeg";
import music4 from "../../../assets/pictures/music/4.jpeg";
import music5 from "../../../assets/pictures/music/5.jpeg";
import music6 from "../../../assets/pictures/music/6.jpeg";
import music7 from "../../../assets/pictures/music/7.jpeg";
import music8 from "../../../assets/pictures/music/8.jpeg";
import music9 from "../../../assets/pictures/music/9.png";
import music10 from "../../../assets/pictures/music/10.jpeg";
import music11 from "../../../assets/pictures/music/11.jpeg";
import music12 from "../../../assets/pictures/music/12.jpeg";

import './Homepage.css';
import {

useHistory,
} from 'react-router-dom';
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";


function Homepage(){

    const history=useHistory();



    return(
    <html>



    <body>
    <header className="homepageHeader">

    </header>
      <main>
          <div className="parent">
          <TopMenuCustomer/>
          <div className="pictureContainer">
          {/*<img src={home} className="background-image3" alt="logo"/>*/}

          <img src={DonDiablo_into_the_unknown} className="don_diablo_unknown" alt="albumcover"/>
              <button type="submit" className="listenButton" >
                  OFFICIAL VIDEO
              </button>
          </div>
          </div>

          <div className="homepageContainer">
              <h1 className="h1News">NEWS</h1>
              <h3 className="newsDates">JAN 29, 2021</h3>
              <h3 className="newsInfo">DON DIABLO - INTO THE UNKNOWN</h3>
              <h3 className="newsDates">JAN 16, 2021</h3>
              <h3 className="newsInfo">DON DIABLO & IMANBEK - KILL ME BETTER FT. TREVOR DANIEL (TRAVIS BARKER ALT VERSION)</h3>
              <h3 className="newsDates">DEC 11, 2020</h3>
              <h3 className="newsInfo">DUA LIPA - LEVITATING FT. DABABY (DON DIABLO REMIX)</h3>
              <h3 className="newsDates">JAN 16, 2021</h3>
              <h3 className="newsInfo">DON DIABLO & IMANBEK - KILL ME BETTER FT. TREVOR DANIEL (DON DIABLO VIP MIX)</h3>
          </div>
          <div className="background2Wrapper">
          </div>
          <h1 className="h1Music">MUSIC</h1>
          <div className="divContainerMusic">

              <ul className="musicContainer">

                  <li>
                      <a href="https://www.youtube.com/watch?v=fItOVIPyYRk" target="_blank">
                      <img src={music1} className="musicPictures" alt="musicPic1" />
                      </a>
                      </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=2Dvloj_jzqg" target="_blank">
                      <img src={music2} className="musicPictures" alt="musicPic2" />
                      </a>
                      </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=IFQXALpaEwM" target="_blank">
                      <img src={music3} className="musicPictures" alt="musicPic3" />
                      </a>
                      </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=2Dvloj_jzqg" target="_blank">
                      <img src={music4} className="musicPictures" alt="musicPic4" />
                      </a>
                      </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=CSrm85yNwCM&feature=youtu.be" target="_blank">
                      <img src={music5} className="musicPictures" alt="musicPic5" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=gSDVTS1-cyU&feature=youtu.be" target="_blank">
                      <img src={music6} className="musicPictures" alt="musicPic6" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=hHFymqAf-Zo&feature=youtu.be" target="_blank">
                      <img src={music7} className="musicPictures" alt="musicPic7" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=a2WXpiBiNcA&feature=youtu.be" target="_blank">
                      <img src={music8} className="musicPictures" alt="musicPic8" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=33lKUK-SxzQ" target="_blank">
                      <img src={music9} className="musicPictures" alt="musicPic9" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=dnuI31DXAco&feature=youtu.be" target="_blank">
                      <img src={music10} className="musicPictures" alt="musicPic10" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=opMKcQaeTuY&feature=youtu.be" target="_blank">
                      <img src={music11} className="musicPictures" alt="musicPic11" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=0TF9UCwithU" target="_blank">
                      <img src={music12} className="musicPictures" alt="musicPic12" />
                      </a>
                  </li>
              </ul>
          </div>
      </main>


    </body>

    </html>
    );
}


export default Homepage;