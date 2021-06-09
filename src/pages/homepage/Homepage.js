import React from 'react';

import music1 from "../../assets/pictures/music/1.png";
import music2 from "../../assets/pictures/music/2.jpeg";
import music3 from "../../assets/pictures/music/3.jpeg";
import music4 from "../../assets/pictures/music/4.jpeg";
import music5 from "../../assets/pictures/music/5.jpeg";
import music6 from "../../assets/pictures/music/6.jpeg";
import music7 from "../../assets/pictures/music/7.jpeg";
import music8 from "../../assets/pictures/music/8.jpeg";
import music9 from "../../assets/pictures/music/9.png";
import music10 from "../../assets/pictures/music/10.jpeg";
import music11 from "../../assets/pictures/music/11.jpeg";
import music12 from "../../assets/pictures/music/12.jpeg";
import backgroundPicture from "../../assets/pictures/home_background.jpg"
import donDiabloShows from "../../assets/pictures/dondiablo_shows.PNG"

import styles from './Homepage.module.css';
import {

useHistory,
} from 'react-router-dom';
import NavigationBar from "../../components/NavigationBar/NavigationBar";


function Homepage(){

    const history=useHistory();



    return(
    <html>

    <NavigationBar/>

    <body className={styles['homepageBody']}>


      <main>
          <div className="parent">

          <div className="pictureContainer">
          <img src={backgroundPicture} className={styles['homepageBackground1']} alt="logo"/>
          </div>
          </div>

          <div className={styles['homepageContainer']}>
              <h1 className={styles['h1News']}>NEWS</h1>
              <h3 className={styles['newsDates']}>JAN 29, 2021</h3>
              <h3 className={styles['newsDates']}>DON DIABLO - INTO THE UNKNOWN</h3>
              <h3 className={styles['newsDates']}>JAN 16, 2021</h3>
              <h3 className={styles['newsDates']}>DON DIABLO & IMANBEK - KILL ME BETTER FT. TREVOR DANIEL (TRAVIS BARKER ALT VERSION)</h3>
              <h3 className={styles['newsDates']}>DEC 11, 2020</h3>
              <h3 className={styles['newsDates']}>DUA LIPA - LEVITATING FT. DABABY (DON DIABLO REMIX)</h3>
              <h3 className={styles['newsDates']}>JAN 16, 2021</h3>
              <h3 className={styles['newsDates']}>DON DIABLO & IMANBEK - KILL ME BETTER FT. TREVOR DANIEL (DON DIABLO VIP MIX)</h3>
          </div>
          <img src={donDiabloShows} className={styles['homepageBackground']} alt="logo"/>
          <h1 className={styles['h1Music']}>MUSIC</h1>
          <div className={styles['divContainerMusic']}>

              <ul className={styles['musicContainer']}>

                  <li>
                      <a href="https://www.youtube.com/watch?v=fItOVIPyYRk" target="_blank">
                      <img src={music1} className={styles['musicPictures']} alt="musicPic1" />
                      </a>
                      </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=2Dvloj_jzqg" target="_blank">
                      <img src={music2} className={styles['musicPictures']}  alt="musicPic2" />
                      </a>
                      </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=IFQXALpaEwM" target="_blank">
                      <img src={music3} className={styles['musicPictures']}  alt="musicPic3" />
                      </a>
                      </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=2Dvloj_jzqg" target="_blank">
                      <img src={music4} className={styles['musicPictures']}  alt="musicPic4" />
                      </a>
                      </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=CSrm85yNwCM&feature=youtu.be" target="_blank">
                      <img src={music5} className={styles['musicPictures']}  alt="musicPic5" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=gSDVTS1-cyU&feature=youtu.be" target="_blank">
                      <img src={music6} className={styles['musicPictures']}  alt="musicPic6" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=hHFymqAf-Zo&feature=youtu.be" target="_blank">
                      <img src={music7}className={styles['musicPictures']}  alt="musicPic7" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=a2WXpiBiNcA&feature=youtu.be" target="_blank">
                      <img src={music8} className={styles['musicPictures']}  alt="musicPic8" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=33lKUK-SxzQ" target="_blank">
                      <img src={music9} className={styles['musicPictures']}  alt="musicPic9" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=dnuI31DXAco&feature=youtu.be" target="_blank">
                      <img src={music10} className={styles['musicPictures']}  alt="musicPic10" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=opMKcQaeTuY&feature=youtu.be" target="_blank">
                      <img src={music11} className={styles['musicPictures']} alt="musicPic11" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/watch?v=0TF9UCwithU" target="_blank">
                      <img src={music12} className={styles['musicPictures']}  alt="musicPic12" />
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