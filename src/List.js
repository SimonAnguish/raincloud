import React from 'react'
import './List.scss'

const List = props => {
    const { cardData, removeCard } = props

    const cards = cardData.map((card, index) => {
        return  (
            <div className="card" key={index}>
                <div className="card-image">

                </div>
                <div className="card-info">
                    <button className="delete" onClick={() => removeCard(index)}>Delete</button>
                    <span className="name">{card.name}</span>
                    <span className="binomial">{card.genus} {card.species}</span>
                    <span className="watering">~ {card.watering} Days</span>
                </div>
            </div>
        )
    })

    return (
        <div className='list'>
            {cards}
        </div>
    )
}

export default List