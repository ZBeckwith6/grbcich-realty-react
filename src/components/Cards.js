import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these featured houses!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='img/house1.jpg' text="Explore this gem in the heart of Clayton"
                            path='/services' 
                        />
                        <CardItem 
                            src='img/house3.jpg' text="Perfect home for a family in Dogtown!"
                            path='/services' 
                        />    
                    </ul>
                    <h1>Helpful Resources Brought to you by Hermann London</h1>
                    <ul className="cards__items">
                        <CardItem 
                            src='img/portrait.jpg' text="Check out my Realtor Spotlight from HL!"
                            path='/services' 
                        />
                        <CardItem 
                            src='img/house2.jpg' text="Add Caption Here"
                            path='/services' 
                        />    
                        <CardItem 
                            src='img/house2.jpg' text="Add Caption Here"
                            path='/services' 
                        />    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
