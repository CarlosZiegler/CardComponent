import styled from 'styled-components'

export const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width:400px;
    background:#454545;
    background: ${ props => `${props.cardColorStyles.backgroundColor}`};
    border-radius: 10px 10px 10px 10px;
    border: ${ props => `${props.cardColorStyles.borderStyle}`};
`