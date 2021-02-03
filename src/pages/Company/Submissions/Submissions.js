import React from 'react';
import './Submissions.css';
import TopMenuCompany from "../../../components/TopMenuCompany/TopMenuCompany";

function Submissions(){

    return(
        <div>
            <TopMenuCompany/>
            <div className="loggedInContainer">
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email adress</th>
                        <th>Country</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Remco Wewers</td>
                        <td>remco@wewers.nl</td>
                        <td>Netherlands</td>
                        <td>03-02-2021</td>
                        <td>In progress</td>
                    </tr>
                    <tr>
                        <td>David Guetta</td>
                        <td>david@guetta.nl</td>
                        <td>Netherlands</td>
                        <td>15-12-2020</td>
                        <td>Rejected</td>
                    </tr>
                    <tr>
                        <td>Dj manbun</td>
                        <td>manbun@live.nl</td>
                        <td>France</td>
                        <td>07-08-2020</td>
                        <td>Approved</td>
                    </tr>
                    <tr>
                        <td>Dj Tiesto</td>
                        <td>teisto@live.nl</td>
                        <td>Netherlands</td>
                        <td>01-08-2019</td>
                        <td>Approved</td>
                    </tr>

                    </tbody>
                </table>

            </div>
        </div>

    );

}
export default Submissions;