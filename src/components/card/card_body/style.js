import styled from 'styled-components'

export const CardBodyStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-content: center;

    .card__title{
        margin:10px 0px 10px 0px;
        padding: 10px 20px 10px 20px;
        color:${ props => `${props.cardFontStyle.fontColorPrimary}`};
        font-size: 28px;
        text-align: center;
    }
    .card__info {
        display: flex;
        flex-direction: column;   
        color:${ props => `${props.cardFontStyle.fontColorSecondary}`};
        
        
    }
    .card__info h3 {
        margin:0;
        padding:0;
        align-self:center;
        color:${ props => `${props.cardFontStyle.fontColorSecondary}`};
    }
    .card__price{
        display: flex;
        justify-content:center;
        align-items:center;
    }
    .card__price span{
        font-size: 14px;
        padding:15px 0px 0px 0px;
        align-self:flex-start;
        color:${ props => `${props.cardFontStyle.fontColorSecondary}`};
    }
    .card__price h2{
        font-size: 36px;
        align-self:center;
        color:${ props => `${props.cardFontStyle.fontColorPrimary}`};
        margin:5px
    }
`
