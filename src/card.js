import React from 'react';
import data from './data.json';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
function Cards() {
    let cardsData = data.details;
    console.log(cardsData);

    let images = [logo, logo];
    return (
        <div>
            <h1 className="text-primary">cards</h1>
            <div className="row">
                {cardsData.map((values, index) => (

                    <div className="col" key={index}>
                        <div className="card">
                            <img src={images[index]}></img>
                            <h1>{values.card.name}</h1>
                            <p>{values.card.mobile}</p>
                            <p>{values.card.des}</p>
                            <a href={"mailto" + values.card.email}>
                                <p>{values.card.email}</p>
                            </a>
                            <Link to={{ pathname: "/resume", personcard: { id: index } }} className="btn btn-primary">click me</Link>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    );
}
export default Cards;