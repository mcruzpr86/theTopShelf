import React, { useState } from 'react';
import './slider.scss';
import ImgComp from "./ImgCom";
import i1 from "./tsImages/slide1.jpg"
import i2 from "./tsImages/slide2.jpg"
import i3 from "./tsImages/slide3.jpg"
import i4 from "./tsImages/slide4.jpg"
import i5 from "./tsImages/slide5.jpg"

function Slider() {
    const [x, setX] = useState(0);
    let sliderArr = [<ImgComp src={i1} />, <ImgComp src={i2} />, <ImgComp src={i3} />, <ImgComp src={i4} />, <ImgComp src={i5} />]
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                );
            })
            }

            <button id="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
            </button>

        </div>
    );
}

export default Slider;