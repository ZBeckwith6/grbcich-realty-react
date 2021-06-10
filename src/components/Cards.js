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
                            src='img/house1.jpg' text="Explore the hidden waterfall deep inside the Amazon"
                            label='House 1' path='/services' 
                        />
                        <CardItem 
                            src='img/house2.jpg' text="Explore the hidden waterfall deep inside the Amazon"
                            label='House 2' path='/services' 
                        />    
                    </ul>
                    <h1>Helpful Resources Brought to you by Hermann London</h1>
                    <ul className="cards__items">
                        <CardItem 
                            src='img/house1.jpg' text="Explore the hidden waterfall deep inside the Amazon"
                            label='House 1' path='/services' 
                        />
                        <CardItem 
                            src='img/house2.jpg' text="Explore the hidden waterfall deep inside the Amazon"
                            label='House 2' path='/services' 
                        />    
                        <CardItem 
                            src='img/house2.jpg' text="Explore the hidden waterfall deep inside the Amazon"
                            label='House 2' path='/services' 
                        />    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
