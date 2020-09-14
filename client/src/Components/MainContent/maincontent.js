import React, { useState } from 'react';
import axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
import "./mainContent.css";

const drinks = ["Whiskey", "Vodka", "Gin", "Scotch", "Tequila", "Rum"];
const ingredientUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=";
const reciepieUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function MainContent() {
    const [choices, setChoices] = useState([])
    function getinfo(drink) {
        axios.get(ingredientUrl + drink).then(function (response) {
            setChoices(response.data.ingredients)
            console.log(response.data.ingredients)
        })
    }
    function getRecipieUrl(drink) {
        axios.get(reciepieUrl + drink).then(function (response) {
            setChoices(response.data.ingredients)
            console.log(response.data.ingredients)
        })
    }
    return (

        <div className="individualDrink">
            {drinks.map(function (drink) {
                return (
                    <div className="choicesButton">
                        <ReactBootStrap.Card style={{ width: '25rem' }}>
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>{drink}</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text type="text" maxLength="15">
                                    {choices.map(choice => <div> Alcohol Percentage: {choice.strABV}</div>)}
                                    {choices.map(choice => <div> Try this out!: {choice.idIngredient}</div>)}
                                </ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                        <div className="mainButton">
                            <ReactBootStrap.Button variant="secondary" onClick={() => getinfo(drink)}>Secondary</ReactBootStrap.Button>{' '}
                            <ReactBootStrap.Button variant="warning" onClick={() => getRecipieUrl(drink)}>Find Receipe</ReactBootStrap.Button>{' '}


                        </div>
                    </div>)

            })}
        </div>
    )
}

export default MainContent;