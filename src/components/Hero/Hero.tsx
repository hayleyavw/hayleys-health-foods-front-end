import React from 'react'
import {
    StyledHero,
    StyledHeroImage,
    StyledHeroHeading,
    StyledHeroGradientLine,
    StyledHeroWrapper,
    StyledHeadingWrapper,
    StyledSubtitle,
} from './Hero.styled'

export class Hero extends React.Component {
    render() {
        const heroImage = require('./heroImages/muesli-banner.jpg')
        return (
            <StyledHeroWrapper>
                <StyledHero>
                    <StyledHeroImage src={heroImage}></StyledHeroImage>
                    <StyledHeadingWrapper>
                        <StyledHeroHeading>Hayley's Health Foods</StyledHeroHeading>
                        <StyledSubtitle>Recipes Designed with Gut Health in Mind.</StyledSubtitle>
                    </StyledHeadingWrapper>
                </StyledHero>
                <StyledHeroGradientLine />
            </StyledHeroWrapper>
        )
    }
}
