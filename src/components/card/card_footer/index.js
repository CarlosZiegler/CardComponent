import React from 'react'

import Button from '../../button'


import { CardFooter } from './style.js'

export default function Card({ buttonText, cardFontStyle }) {
    return (
        <>
            {buttonText !== undefined &&
                <CardFooter>
                    <Button cardFontStyle={cardFontStyle} buttonText={buttonText} />
                </CardFooter>
            }
        </>
    )
}
