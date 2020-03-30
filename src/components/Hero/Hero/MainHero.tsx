import React from 'react'
import { StyledMainHeroWrapper, StyledSubtitle } from './MainHero.styled'
import {
    StyledHeroHeadingWrapper,
    StyledHeroHeading,
    StyledHeroImage,
    StyledHero,
    StyledHeroGradientLine,
} from '../Hero.styled'

export class MainHero extends React.Component {
    render() {
        const heroImage = require('./heroImages/muesli-banner.jpg')
        return (
            <StyledMainHeroWrapper>
                <StyledHero isMainHero={true}>
                    <StyledHeroImage isMainHero={true} src={heroImage}></StyledHeroImage>
                    <StyledHeroHeadingWrapper>
                        <StyledHeroHeading>Hayley's Health Foods</StyledHeroHeading>
                        <StyledSubtitle>Recipes Designed with Gut Health in Mind.</StyledSubtitle>
                    </StyledHeroHeadingWrapper>
                </StyledHero>
                <StyledHeroGradientLine />
            </StyledMainHeroWrapper>
        )
    }
}
