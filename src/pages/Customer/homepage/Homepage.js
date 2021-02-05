import React from 'react';

import background1 from "../../../782147.jpg";
import DonDiablo_into_the_unknown from "../../../assets/DonDiablo_into_the_unkown.PNG"
import background2 from "../../../assets/138618.jpg";

import background3 from "../../../assets/138616.jpg";

import './Homepage.css';
import {
    Link,
useHistory,
} from 'react-router-dom';
import TopMenu from "../../../components/TopMenuCustomer/TopMenu";

function Homepage(){

    const history=useHistory();

    function handleClick(){
        history.push('/About');
    }

    return(
    <html>
    <TopMenu />
    <body className="parent">
      <main>
        <img src={background3} className="background-image3" alt="logo"/>
          <img src={DonDiablo_into_the_unknown} className="don_diablo_unknown" alt="logo"/>
    </main>


    </body>
    </html>
    );
}


export default Homepage;