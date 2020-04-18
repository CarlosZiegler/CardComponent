import React from 'react'

import Card from '../../components/card'

import { Container, ContainerDark } from './style.js'

const infoCards = [
    {
        imgUrl: __dirname + "assets/MetsVsIA.jpg",
        title: "New York Mets vc. Los Angeles Dodgers",
        date: "29 Jun 2020",
        city: "Citi Field",
        state: "NY",
        price: 83
    },
    {
        imgUrl: __dirname + "assets/finalsNBA.jpeg",
        title: "NBA Finals",
        date: "29 Jun 2020",
        city: "Los Angeles",
        state: "CA",
        price: 150
    },
    {
        imgUrl: __dirname + "assets/netsVSchicago.jpeg",
        title: "Brooklyn Net vs. Chicago Bulls",
        date: "29 Jun 2020",
        city: "Barclays Center",
        state: "NY",
        price: 73
    },
    {
        imgUrl: __dirname + "assets/afl-grand-final.png",
        title: "AFL Grand Finals",
        date: "29 Jun 2020",
        city: "MCG",
        state: "Melbourn",
        price: 59
    },
]


export default function Home() {
    return (
        <>
            <Container>
                {infoCards.length > 0 && infoCards.map((card, index) => (
                    <Card key={index}
                        cardStyle={"primary"}
                        cardImage={card.imgUrl}
                        cardTitle={card.title}
                        cardInfoDate={card.date}
                        cardInfoLocation={`${card.city}, ${card.state}`}
                        cardInfoPrice={card.price}
                        cardFooterBtnText={"Get Tickets"} />
                ))}
            </Container>

            <ContainerDark >
                {infoCards.length > 0 && infoCards.map((card, index) => (
                    <Card key={index}
                        cardStyle={"dark"}
                        cardImage={card.imgUrl}
                        cardTitle={card.title}
                        cardInfoDate={card.date}
                        cardInfoLocation={`${card.city}, ${card.state}`}
                        cardInfoPrice={card.price}
                    />
                ))}
            </ContainerDark>
        </>
    )
}
