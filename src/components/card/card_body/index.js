import React from 'react'


import { CardBodyStyle } from './style.js'

export default function CardBody({ cardFontStyle, cardTitle, cardInfoDate, cardInfoLocation, cardInfoPrice }) {
    return (
        <>
            <CardBodyStyle cardFontStyle={cardFontStyle}>
                <h2 className="card__title">{cardTitle}</h2>
                <div className="card__info">
                    <h3 className="card__info-date">{cardInfoDate}</h3>
                    <h3 className="card__info-location">{cardInfoLocation}</h3>
                </div>
                <div className="card__price">
                    <span>From</span>
                    <h2>${cardInfoPrice}</h2>
                </div>
            </CardBodyStyle>
        </>
    )
}
