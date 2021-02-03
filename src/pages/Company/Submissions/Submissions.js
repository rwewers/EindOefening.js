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
                        <td><a href="#" className="row-link">Remco Wewers</a></td>
                        <td><a href="#" className="row-link" >remco@wewers.nl</a></td>
                        <td><a href="#" className="row-link"  >Netherlands</a></td>
                        <td><a href="#" className="row-link"  >03-02-2021</a></td>
                        <td><a href="#" className="row-link" >In progress</a></td>
                    </tr>
                    <tr>
                        <td><a href="#" className="row-link">David Guetta</a></td>
                        <td><a href="#" className="row-link">david@guetta.nl</a></td>
                        <td><a href="#" className="row-link">Netherlands</a></td>
                        <td><a href="#" className="row-link">15-12-2020 </a></td>
                        <td><a href="#" className="row-link">Rejected</a></td>
                    </tr>
                    <tr>
                        <td><a href="#" className="row-link">Dj manbun</a></td>
                        <td><a href="#" className="row-link">manbun@live.nl</a></td>
                        <td><a href="#" className="row-link">France</a></td>
                        <td><a href="#" className="row-link">07-08-2020</a></td>
                        <td><a href="#" className="row-link">Approved</a></td>
                    </tr>
                    <tr>
                        <td><a href="#" className="row-link">Dj Tiesto</a></td>
                        <td><a href="#" className="row-link">teisto@live.nl</a></td>
                        <td><a href="#" className="row-link">Netherlands</a></td>
                        <td><a href="#" className="row-link">01-08-2019</a></td>
                        <td><a href="#" className="row-link">Approved</a></td>
                    </tr>

                    </tbody>
                </table>

            </div>
        </div>

    );

}
export default Submissions;