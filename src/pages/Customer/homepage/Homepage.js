import React from 'react';

import DonDiablo_into_the_unknown from "../../../assets/DonDiablo_into_the_unkown.PNG"
import logo from "../../../logo.png";
import background3 from "../../../assets/background.jpg";
import background4 from "../../../assets/background2.jpg";

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
          <img src={background4} className="background-image3" alt="logo"/>
          {/*<img src={logo} className="App-logo1" alt="logo" />*/}
          <img src={DonDiablo_into_the_unknown} className="don_diablo_unknown" alt="logo"/>
          </div>
          <div className="homepageContainer">
          <h1 className="h1News">NEWS</h1>
          </div>
    </main>


    </body>

    </html>
    );
}


export default Homepage;