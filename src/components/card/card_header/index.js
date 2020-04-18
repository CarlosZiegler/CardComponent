import React from 'react'

import { CardHeaderStyle } from './style.js'

export default function CardHeader({ cardImage }) {
    return (
        <>
            <CardHeaderStyle>

                <img src={cardImage} alt="CardImage" />

            </CardHeaderStyle>
        </>
    )
}
