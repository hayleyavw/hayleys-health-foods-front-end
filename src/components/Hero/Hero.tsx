import React from 'react'
import { StyledHero, StyledHeroImage, StyledHeroHeading } from './Hero.styled'

export class Hero extends React.Component {
    render() {
        const heroImage = require('./heroImages/muesli-banner.jpg')
        return (
            <StyledHero>
                <StyledHeroImage src={heroImage}></StyledHeroImage>
                <StyledHeroHeading>Hayley's Health Foods</StyledHeroHeading>
            </StyledHero>
        )
    }
}
