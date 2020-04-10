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
import { Image } from '../../api/common/ResponseShapes'
import { getStaticFilesPrefix } from '../../utils/utils'
import { srcSetWidths } from '../styling/styling-utils/breakpoints'

interface HeroProps {
    isHomePage?: boolean
    smallImage?: Image
    mediumImage?: Image
    largeImage?: Image
    title: string
    subtitle?: string
}

export class Hero extends React.Component<HeroProps> {
    render() {
        const { isHomePage, smallImage, mediumImage, largeImage, title, subtitle } = this.props

        let smallBanner = require('./heroImages/small.jpg')
        let mediumBanner = require('./heroImages/medium.jpg')
        let largeBanner = require('./heroImages/large.jpg')

        const small = smallImage ? `${getStaticFilesPrefix()}${smallImage.url}` : `${smallBanner}`
        const medium = mediumImage
            ? `${getStaticFilesPrefix()}${mediumImage.url}`
            : `${mediumBanner}`
        const large = largeImage ? `${getStaticFilesPrefix()}${largeImage.url}` : `${largeBanner}`

        const hasSubtitle = subtitle ? true : false
        return (
            <StyledHeroWrapper>
                <StyledHero hasSubtitle={hasSubtitle}>
                    <StyledHeroImage
                        isHomePage={isHomePage}
                        src={small}
                        srcSet={`${small} ${srcSetWidths.sm}, ${medium} ${srcSetWidths.md}, ${large} ${srcSetWidths.lg}`}
                    />
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
