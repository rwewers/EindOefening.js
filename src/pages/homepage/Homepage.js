import React from 'react';
import logo from "../../logo.png";
import background from "../../782147.jpg";
import './Homepage.css';
import {
    Link,
useHistory,
} from 'react-router-dom';

function Homepage(){

    const history=useHistory();

    function handleClick(){
        history.push('/About');
    }

    return(
    <html>

    <body>
      <main>
        <img src={background} className="background-image" alt="logo"/>
    </main>


    </body>
    </html>
    );
}


export default Homepage;