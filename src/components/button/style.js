import styled from 'styled-components'

export const ButtonLink = styled.a`
    color:${ props => `${props.cardFontStyle.fontColorPrimary}`};
    border:3px solid #008cf7;
    border-radius: 20px;
    padding:10px 20px;
    text-decoration: none;
    font-weight: bold;
    
    :hover{
    color:#fff;
    background:#008cf7;
    }
`


