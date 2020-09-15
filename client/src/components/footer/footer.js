import React from "react";
import "./footer.css";


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Why Sign Up</h4>
                        <ul className="list-unstyled">
                            <li>Choose from a variety</li>
                            <li>Of cocktails and</li>
                            <li>Save to your favorites!</li>
                        </ul>
                    </div>

                    {/* Column3 */}
                    <div className="col">
                        <h4>Account</h4>
                        <ul className="list-unstyled">
                            <li>Sign In</li>
                            <li>Favorites</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;