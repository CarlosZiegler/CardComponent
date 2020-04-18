import React from 'react'

import './style.css'
import { ButtonLink } from './style.js'

export default function Button({ buttonText, cardFontStyle }) {
    return (
        <>

            <ButtonLink cardFontStyle={cardFontStyle} href="/" className="button__link">{buttonText}</ButtonLink>

        </>
    )
}
