import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container' style={{ backgroundImage: "url(img/sign3.jpg)", 
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center', WebkitBackgroundSize: 'cover' }}>
            <h1>Will Grbcich Realty</h1>
            <p>Helping St Louis Find Their Dream Homes</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Buyers
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Sellers
                </Button>
            </div>
        </div>
    )
}

export default HeroSection