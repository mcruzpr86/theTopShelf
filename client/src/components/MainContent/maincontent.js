import React, { useState } from 'react';
import axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
import "./mainContent.css";


const randomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const reciepieUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function MainContent() {
    const [choices, setChoices] = useState([])
    function getinfo() {
        axios.get(randomDrink).then(function (response) {
            setChoices([...choices, response.data.drinks[0]])
            console.log(choices)
        })
    }
    // function getRecipieUrl(drink) {
    //     axios.get(reciepieUrl + drink).then(function (response) {
    //         setChoices(response.data.ingredients)
    //         console.log(response.data.ingredients)
    //     })
    // }
    return (
        <>
            <div className="mainButton">
                <ReactBootStrap.Button variant="secondary" onClick={() => getinfo()}>Show me the honey!</ReactBootStrap.Button>{' '}
            </div>
            {choices.map(function (drink) {
                return (
                    <div key={drink.strDrink} className="individualDrink">
                        <div className="choicesButton">
                            <ReactBootStrap.Card style={{ width: '40rem' }}>
                                <ReactBootStrap.Card.Body>
                                    <ReactBootStrap.Card.Title>{drink.strDrink}</ReactBootStrap.Card.Title>
                                    <ReactBootStrap.Card.Text type="text" maxLength="15">
                                         Looks Good!:<img src={drink.strDrinkThumb}></img> 
                                        
                                    </ReactBootStrap.Card.Text>
                                    <ReactBootStrap.Card.Text type="text" maxLength="15">
                                        
                                         Try this out!: {drink.strInstructions}
                                    </ReactBootStrap.Card.Text>
                                </ReactBootStrap.Card.Body>
                            </ReactBootStrap.Card>
                            <div className="mainButton">
                                <ReactBootStrap.Button variant="secondary" onClick={() => getinfo(drink)}>Show me the honey!</ReactBootStrap.Button>{' '}
                            </div>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default MainContent;