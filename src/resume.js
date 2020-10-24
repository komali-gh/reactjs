import React from 'react';
import data from './data.json';
import logo from './logo.svg';
function Resume(props){
    let profile=data.details[props.location.personcard.id];
    console.log(profile);
    let images = [logo];
return(
    <div>
       <div> <img src={images}width="50" height="50" align="left"></img></div>
       <br></br>
       <br></br>
        <h5 align="left">{profile.card.name}</h5>
        < a href={"mailto" + profile.card.email}>
        <p align="left">{profile.card.email}</p>
        </a>
        <p align="left">{profile.card.mobile}</p>
        <hr></hr>
<h4 align="left">{profile.card.carobj}</h4>
<p align="left">{profile.card.carrerobjective}</p>
<h5 align="left">{profile.card.edu}</h5>
           <table border="1">
                <tr>
                <th>Institue</th>
                <th>Degree</th>
                <th>Passout</th>
                <th>GPA</th>
                </tr>
                <tr>
                <td>{profile.card.schoolname}</td>
                <td>{profile.card.schooldegree}</td>
                <td>{profile.card.schoolPassout}</td>
                <td>{profile.card.schoolyear}</td>
                </tr>
                <tr>
                <td>{profile.card.interclg}</td>
                <td>{profile.card.interdegree}</td>
                <td>{profile.card.interpassout}</td>
                <td>{profile.card.intergpa}</td>
                </tr>
                <tr>
                <td>{profile.card.clg}</td>
                <td>{profile.card.clgdeg}</td>
                <td>{profile.card.clgpass}</td>
                <td>{profile.card.clggpa}</td>
                </tr>               
        </table>
<h4 align="left">{profile.card.Hobb}</h4>
<ul>
            <li><p align="left">{profile.card.Hobbies1}</p></li>
            <li><p align="left">{profile.card.Hobbies2}</p></li>
            </ul>
            <h6 align="left">{profile.card.wors} </h6>
            <ul>
                <li><p align="left">{profile.card.w1}</p> </li>
                <li><p align="left">{profile.card.w2}</p> </li>
            </ul>
            <h6 align="left">{profile.card.lang} </h6>
            <ul>
                <li><p align="left">{profile.card.l1}</p></li>
                <li><p align="left">{profile.card.l2}</p></li>
                <li><p align="left">{profile.card.l3}</p></li>
                <li><p align="left">{profile.card.l4}</p></li>
            </ul>
            <h6 align="left">{profile.card.dec} </h6>
<p align="left">{profile.card.dec1}</p>
    </div>
)
}
export default Resume;