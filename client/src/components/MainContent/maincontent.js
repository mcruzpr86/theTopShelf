import React, { useState } from 'react';
import axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
import "./mainContent.css";
import FaveButton from '../FavoritesBtn/Favorites';


const randomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


function MainContent() {
    const [choices, setChoices] = useState([])
    function getinfo() {
        axios.get(randomDrink).then(function (response) {
            setChoices([...choices, response.data.drinks[0]])
            console.log(choices)
        })
    }

    return (
        <>
            {!choices.length ? <div className="mainButton">
                <ReactBootStrap.Button variant="secondary" onClick={() => getinfo()}>Find a drink</ReactBootStrap.Button>{' '}
            </div> : <></>}
            <div className="row" style={{ backgroundColor: 'black' }}>
                {choices.map(function (drink) {
                    return (
                        <div key={drink.strDrink} className="individualDrink col-12 col-sm-6 col-md-4">
                            
                            <ReactBootStrap.Card>
                                <ReactBootStrap.Card.Body className="drinkCard">
                                    <ReactBootStrap.Card.Title>{drink.strDrink}</ReactBootStrap.Card.Title>

                                    <ReactBootStrap.Card.Img className="drinkImg" src={drink.strDrinkThumb}></ReactBootStrap.Card.Img>


                                    <ReactBootStrap.Card.Text type="text">

                                        Try this out!: {drink.strInstructions}
                                    </ReactBootStrap.Card.Text>
                                    <div className="row">
                                    <ReactBootStrap.Button variant="secondary" className="col-6" onClick={() => getinfo(drink)}>Find me a drink!</ReactBootStrap.Button>{' '}
                                    <FaveButton />
                                    </div>
                                </ReactBootStrap.Card.Body>
                            </ReactBootStrap.Card>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default MainContent;