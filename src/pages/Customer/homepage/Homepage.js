import React from 'react';

import DonDiablo_into_the_unknown from "../../../assets/DonDiablo_into_the_unkown.PNG"
import logo from "../../../logo.png";
import home from "../../../assets/home_background.jpg";
import shows from "../../../assets/dondiablo_shows.PNG";

import './Homepage.css';
import {
    Link,
useHistory,
} from 'react-router-dom';
import TopMenuCustomer from "../../../components/TopMenuCustomer/TopMenuCustomer";

function Homepage(){

    const history=useHistory();

    function handleClick(){
        history.push('/About');
    }

    return(
    <html>
    <TopMenuCustomer />


    <body className="parent">
      <main>
          <div className="pictureContainer">
          <img src={home} className="background-image3" alt="logo"/>
          {/*<img src={logo} className="App-logo1" alt="logo" />*/}
          <img src={DonDiablo_into_the_unknown} className="don_diablo_unknown" alt="logo"/>
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
          <img src={shows} className="don_diablo_shows" alt="logo"/>
      </main>


    </body>

    </html>
    );
}


export default Homepage;