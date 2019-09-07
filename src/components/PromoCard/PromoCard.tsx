import React from 'react'
import { StyledPromoCard, StyledPromoCardText } from './PromoCard.styled'

interface PromoCardProps {
    text: string
}

export class PromoCard extends React.Component<PromoCardProps> {
    render() {
        return (
            <StyledPromoCard>
                <StyledPromoCardText>{this.props.text}</StyledPromoCardText>
            </StyledPromoCard>
        )
    }
}
