import React from 'react';
import "./logoandimage.css"

function Logo() {

    return (
        <div>
        <div> 
            <a href="/" className='logoTitle' style={{textDecoration:'none', color: 'maroon', fontSize: '80px', marginLeft: '-180px'}}>The Top Shelf</a>
            
        </div>
        <div>
            <a href="/" className='logoTitle' style={{textDecoration:'none', color: 'maroon', fontSize: '30px'}}>Your virtual happy hour</a>

        </div>

        </div>
    )
}

export default Logo;

