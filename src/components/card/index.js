import React from 'react'

import CardBody from './card_body'
import CardHeader from './card_header'
import CardFooter from './card_footer'


import { Figure } from './style.js'

export default function Card({ cardStyle, cardImage, cardTitle, cardInfoDate, cardInfoLocation, cardInfoPrice, cardFooterBtnText }) {

    let cardColorStyles = {
        borderStyle: '2px solid #dfdfdf',
        backgroundColor: "#fff",
        fontColorPrimary: "#454545",
        fontColorSecondary: "#5c5c5c",
    }

    if (cardStyle && cardStyle === "dark") {
        cardColorStyles.backgroundColor = "#454545"
        cardColorStyles.fontColorPrimary = "#fff"
        cardColorStyles.fontColorSecondary = "#fff"
        cardColorStyles.borderStyle = 'none'
    }

    return (
        <>
            <Figure cardColorStyles={cardColorStyles}>
                <CardHeader
                    cardImage={cardImage} />
                <CardBody
                    cardFontStyle={cardColorStyles}
                    cardTitle={cardTitle}
                    cardInfoDate={cardInfoDate}
                    cardInfoLocation={cardInfoLocation}
                    cardInfoPrice={cardInfoPrice} />
                <CardFooter
                    cardFontStyle={cardColorStyles}
                    buttonText={cardFooterBtnText} />
            </Figure>
        </>
    )
}
