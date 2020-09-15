import React from "react";
import "./footer.css";


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>About</h4>
                        <ul className="list-unstyled">
                            <li>Why Sign Up</li>
                            <li>Drink of the Day</li>
                            <li>Liquor of the Week</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Drinks</h4>
                        <ul className="list-unstyled">
                            <li>Whiskey</li>
                            <li>Vodka</li>
                            <li>Tequila</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Sign In</h4>
                        <ul className="list-unstyled">
                            <li>Favorites</li>
                            <li>Account Settings</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;