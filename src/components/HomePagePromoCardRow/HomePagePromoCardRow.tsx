import React from 'react'
import { PromoCard } from '../PromoCard/PromoCard'
import { StyledPromoCardRow } from './HomePagePromoCardRow.styled'

export class HomePagePromoCardRow extends React.Component {
    render() {
        return (
            <StyledPromoCardRow>
                <PromoCard text="Read the blog." />
                <PromoCard text="Recipes designed with Gut Health in Mind." />
                <PromoCard text="Support me to make more." showSupportButton={true} />
            </StyledPromoCardRow>
        )
    }
}
