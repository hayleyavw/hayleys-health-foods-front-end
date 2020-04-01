import React from 'react'
import {
    StyledHeroHeadingWrapper,
    StyledHeroHeading,
    StyledHeroImage,
    StyledHero,
    StyledHeroGradientLine,
    StyledHeroWrapper,
    StyledSubtitle,
} from './Hero.styled'
import { api_url } from '../../api/common'

interface HeroProps {
    heroImage?: string
    title: string
    subtitle?: string
}

export class Hero extends React.Component<HeroProps> {
    render() {
        const { heroImage, title, subtitle } = this.props
        const heroImageUrl = heroImage
            ? `${api_url}${heroImage}`
            : require('./heroImages/muesli-banner.jpg')
        const hasSubtitle = subtitle ? true : false
        return (
            <StyledHeroWrapper>
                <StyledHero hasSubtitle={hasSubtitle}>
                    <StyledHeroImage hasSubtitle={hasSubtitle} src={heroImageUrl}></StyledHeroImage>
                    <StyledHeroHeadingWrapper>
                        <StyledHeroHeading>{title}</StyledHeroHeading>
                        <StyledSubtitle>{subtitle}</StyledSubtitle>
                    </StyledHeroHeadingWrapper>
                </StyledHero>
                <StyledHeroGradientLine />
            </StyledHeroWrapper>
        )
    }
}
