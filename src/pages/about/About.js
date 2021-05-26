import React from 'react';
import './About.css';
import pictureAboutDiablo from "../../assets/1+(1).jpg";
import TopMenuCustomer from "../../components/TopMenuCustomer/TopMenuCustomer";


function About() {

    return (

        <div className="flexcontainer">
            <TopMenuCustomer />
            <h1 id="biography">BIOGRAPHY</h1>
                <div className="pictureDiv">
            <img src={pictureAboutDiablo} className="diabloAbout" alt="logo"/>
                </div>
            <div id="spanContainer">
            <span>
            Some artists look toward the future. Don Diablo dictates it.
            </span>
            <span>
            In 2020 he made the power move up to #6 on the coveted Top 100 by DJ Mag and was ranked the fifth best selling artist of all time on Beatport. Called “Future House’s Founding Father” by EDM.com, he's become an indisputable phenomenon regularly averaging upwards of 10M monthly listeners on Spotify. Don Diablo is one of the platform’s “Top 300 Most-Listened to Artists” with over half-a-billion streams to date.
            </span>

            <span>
            Awowed by his peers, superstars such as of Rihanna, Dua Lipa, Ed Sheeran, Chainsmokers & Coldplay, Kygo, Martin Garrix & Khalid, DJ Snake & Justin Bieber, Bastille, Madonna, Birdy, MØ & Diplo, David Guetta & Martin Solveig and more have sought him out for his high-profile remixes. Meanwhile, the likes of Trevor Daniel, Gucci Mane, Diplo, Emeli Sandé, Calum Scott, Kelis, A R I Z O N A and Tiësto have all jumped at the chance to collaborate with Don, including on his 2018 full-length album, FUTURE, which has amassed over 500M streams. Billboard proclaimed it “radiates positivity with 16 massive tracks.”
            </span>

            <span>
            Now in 2020, he breaks the mold and pushes boundaries yet again with the cross-continental collaborative effort "Kill Me Better" with Spotify favourites Trevor Daniel & Imanbek. Besides music, Don will be expand his horizons through fashion, literature and art projects, next to his recently released HEXAGON comic book series.
            </span>

            <span>
            In 2021 and beyond, the FUTURE belongs to Don Diablo.
            </span>

            </div>
        </div>

    );
}
export default About;

