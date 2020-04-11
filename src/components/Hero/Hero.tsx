import React from 'react'
import {
    StyledHeroHeadingWrapper,
    StyledHeroHeading,
    StyledHeroImage,
    StyledHero,
    StyledHeroGradientLine,
    StyledHeroWrapper,
    StyledSubtitle,
    StyledTagsWrapper,
} from './Hero.styled'
import { Image } from '../../api/common/ResponseShapes'
import { getStaticFilesPrefix } from '../../utils/utils'
import { srcSetWidths } from '../styling/styling-utils/breakpoints'
import { TagButton } from '../TagButton/TagButton'
import { TagObject } from '../../api/recipes/ResponseShapes'
import { getTags } from '../../api/recipes/Queries'

interface HeroProps {
    isHomePage?: boolean
    smallImage?: Image
    mediumImage?: Image
    largeImage?: Image
    title: string
    subtitle?: string
    handler?: (tag: string) => void
}

interface State {
    tags: TagObject[]
    loading: boolean
}

export class Hero extends React.Component<HeroProps> {
    public readonly state: Readonly<State> = {
        tags: [new TagObject()],
        loading: true,
    }

    async componentDidMount() {
        const tags = await getTags()
        this.setState({ tags: tags })
        this.setState({ loading: false })
    }

    render() {
        const {
            isHomePage,
            smallImage,
            mediumImage,
            largeImage,
            title,
            subtitle,
            handler,
        } = this.props
        const { tags } = this.state

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
                        <StyledTagsWrapper>
                            {this.state.loading === false && handler && tags
                                ? tags.map((tag: TagObject, index) => (
                                      <TagButton
                                          key={index}
                                          text={tag.name}
                                          handler={handler}
                                          tag={tag}
                                      ></TagButton>
                                  ))
                                : ''}
                        </StyledTagsWrapper>
                    </StyledHeroHeadingWrapper>
                </StyledHero>
                <StyledHeroGradientLine />
            </StyledHeroWrapper>
        )
    }
}
