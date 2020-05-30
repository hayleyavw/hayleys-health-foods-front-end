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
    StyledRecipeInfo,
    StyledRecipeInfoWrapper,
} from './Hero.styled'
import { Image } from '../../api/common/ResponseShapes'
import { buildImagePath } from '../../utils/utils'
import { srcSetWidths } from '../styling/styling-utils/breakpoints'
import { Tag } from '../Tag/Tag'
import { TagObject, RecipeTime } from '../../api/recipes/ResponseShapes'
import { getTags } from '../../api/recipes/Queries'
import { RecipeInfoCard } from '../RecipeInfoCard/RecipeInfoCard'

interface HeroProps {
    isHomePage?: boolean
    smallImage?: Image
    mediumImage?: Image
    largeImage?: Image
    title: string
    subtitle?: string
    handler?: (reset: boolean, tag: string, scroll: boolean) => void
    tags?: TagObject[]
    recipeYield?: string
    prepTime?: RecipeTime
    cookTime?: RecipeTime
    freezeTime?: RecipeTime
    soakTime?: RecipeTime
    setTime?: RecipeTime
    otherTime?: RecipeTime
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
        if (this.props.isHomePage) {
            const tags = await getTags()
            this.setState({ tags: tags })
            this.setState({ loading: false })
        }
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
            tags,
            recipeYield,
            prepTime,
            cookTime,
            freezeTime,
            soakTime,
            setTime,
            otherTime,
        } = this.props
        let tagList = tags ? tags : this.state.tags

        let smallBanner = require('./heroImages/small.jpg')
        let mediumBanner = require('./heroImages/medium.jpg')
        let largeBanner = require('./heroImages/large.jpg')

        const small = smallImage ? `${buildImagePath(smallImage.url)}` : `${smallBanner}`
        const medium = mediumImage ? `${buildImagePath(mediumImage.url)}` : `${mediumBanner}`
        const large = largeImage ? `${buildImagePath(largeImage.url)}` : `${largeBanner}`

        const hasSubtitle = subtitle ? true : false

        return (
            <StyledHeroWrapper>
                <StyledHero hasSubtitle={hasSubtitle}>
                    <StyledHeroImage
                        isHomePage={isHomePage}
                        src={small}
                        srcSet={`${small} ${srcSetWidths.sm}, ${medium} ${srcSetWidths.md}, ${large} ${srcSetWidths.lg}`}
                        alt={isHomePage ? `Muesli, banana, strawberries and yoghurt.` : `${title}.`}
                    />
                    <StyledHeroHeadingWrapper>
                        <StyledHeroHeading isHomePage={isHomePage}>{title}</StyledHeroHeading>
                        <StyledSubtitle>{subtitle}</StyledSubtitle>
                        <StyledRecipeInfoWrapper>
                            <StyledTagsWrapper>
                                {this.state.loading === false
                                    ? tagList.map((tag: TagObject, index) => (
                                          <Tag key={index} text={tag.name} tag={tag}></Tag>
                                      ))
                                    : ''}
                            </StyledTagsWrapper>
                            <StyledRecipeInfo>
                                {this.state.loading === false ? (
                                    prepTime ? (
                                        <RecipeInfoCard info={prepTime} />
                                    ) : (
                                        ''
                                    )
                                ) : (
                                    ''
                                )}
                                {this.state.loading === false ? (
                                    cookTime ? (
                                        <RecipeInfoCard info={cookTime} />
                                    ) : (
                                        ''
                                    )
                                ) : (
                                    ''
                                )}
                                {this.state.loading === false ? (
                                    soakTime ? (
                                        <RecipeInfoCard info={soakTime} />
                                    ) : (
                                        ''
                                    )
                                ) : (
                                    ''
                                )}
                                {this.state.loading === false ? (
                                    freezeTime ? (
                                        <RecipeInfoCard info={freezeTime} />
                                    ) : (
                                        ''
                                    )
                                ) : (
                                    ''
                                )}
                                {this.state.loading === false ? (
                                    setTime ? (
                                        <RecipeInfoCard info={setTime} />
                                    ) : (
                                        ''
                                    )
                                ) : (
                                    ''
                                )}
                                {this.state.loading === false ? (
                                    otherTime ? (
                                        <RecipeInfoCard info={otherTime} />
                                    ) : (
                                        ''
                                    )
                                ) : (
                                    ''
                                )}
                                {this.state.loading === false ? (
                                    recipeYield && recipeYield !== '' ? (
                                        <RecipeInfoCard info={recipeYield} />
                                    ) : (
                                        ''
                                    )
                                ) : (
                                    ''
                                )}
                            </StyledRecipeInfo>
                        </StyledRecipeInfoWrapper>
                    </StyledHeroHeadingWrapper>
                </StyledHero>
                <StyledHeroGradientLine />
            </StyledHeroWrapper>
        )
    }
}
