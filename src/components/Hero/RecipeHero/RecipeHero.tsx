import React from 'react'
import {
    StyledRecipeHeroImageWrapper,
    StyledRecipeHeroImageOverlay,
    StyledRecipeHeroWrapper,
} from './RecipeHero.styled'
import {
    StyledHeroHeadingWrapper,
    StyledHeroHeading,
    StyledHeroImage,
    StyledHero,
    StyledHeroGradientLine,
} from '../Hero.styled'

interface RecipeHeroProps {
    heroImage: string
    recipeTitle: string
}

export class RecipeHero extends React.Component<RecipeHeroProps> {
    render() {
        const api_url = process.env.REACT_APP_API_URL || ''
        return (
            <StyledRecipeHeroWrapper>
                <StyledHero>
                    <StyledRecipeHeroImageWrapper>
                        <StyledHeroImage
                            src={`${api_url}${this.props.heroImage}`}
                        ></StyledHeroImage>
                        <StyledRecipeHeroImageOverlay />
                    </StyledRecipeHeroImageWrapper>
                    <StyledHeroHeadingWrapper>
                        <StyledHeroHeading>{this.props.recipeTitle}</StyledHeroHeading>
                    </StyledHeroHeadingWrapper>
                </StyledHero>
                <StyledHeroGradientLine />
            </StyledRecipeHeroWrapper>
        )
    }
}
