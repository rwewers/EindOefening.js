import React from 'react';
import './Demodrop.css';


function Demodrop() {

    return (
            <div>
             <h1 id="demodrop">DEMODROP</h1>
                <form className="form">
                    <label id="text">
                        NAME *
                        <input type="text" name="name" />
                    </label>
                    <label id="text">
                        EMAIL ADDRESS *
                        <input type="text" name="name" />
                    </label>
                    <label id="text">
                        COUNTRY *
                        <input type="text" name="name" />
                    </label>
                    <label id="text">
                        FACEBOOK
                        <input type="text" name="name" />
                    </label>
                    <label id="text">
                        INSTAGRAM
                        <input type="text" name="name" />
                    </label>
                    <label id="text">
                        ARTISTNAME - SONG NAME *
                        <input type="text" name="name" />
                    </label>
                    <label id="text">
                        MUSIC URL *
                        <input type="text" name="name" />
                    </label>
                    <label id="text">
                        PERSONAL MESSAGE
                        <input id="personalText" type="text" name="name" />
                    </label>

                    </form>
            </div>
    );
}
export default Demodrop;

