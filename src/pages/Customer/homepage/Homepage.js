import React from 'react';

import background from "../../../782147.jpg";
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
    <body>
      <main>
        <img src={background} className="background-image" alt="logo"/>
    </main>


    </body>
    </html>
    );
}


export default Homepage;