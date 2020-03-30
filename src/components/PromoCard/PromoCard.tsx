import React from 'react'
import { StyledPromoCard, StyledPromoCardText } from './PromoCard.styled'
import { BuyMeASmoothieButton } from '../BuyMeASmoothieButton/BuyMeASmoothieButton'

interface PromoCardProps {
    text: string
    showSupportButton?: boolean
}

export class PromoCard extends React.Component<PromoCardProps> {
    render() {
        return (
            <StyledPromoCard>
                <StyledPromoCardText>{this.props.text}</StyledPromoCardText>
                {this.props.showSupportButton ? <BuyMeASmoothieButton /> : ''}
            </StyledPromoCard>
        )
    }
}
