import React from 'react'
import {
    StyledRecipeHero,
    StyledRecipeHeadingWrapper,
    StyledRecipeHeroHeading,
    StyledRecipeHeroImage,
    StyledRecipeHeroImageWrapper,
    StyledRecipeHeroImageOverlay,
} from './RecipeHero.styled'

interface RecipeHeroProps {
    heroImage: string
    recipeTitle: string
}

export class RecipeHero extends React.Component<RecipeHeroProps> {
    render() {
        const api_url = process.env.REACT_APP_API_URL || ''
        return (
            <StyledRecipeHero>
                <StyledRecipeHeroImageWrapper>
                    <StyledRecipeHeroImage
                        src={`${api_url}${this.props.heroImage}`}
                    ></StyledRecipeHeroImage>
                    <StyledRecipeHeroImageOverlay />
                </StyledRecipeHeroImageWrapper>
                <StyledRecipeHeadingWrapper>
                    <StyledRecipeHeroHeading>{this.props.recipeTitle}</StyledRecipeHeroHeading>
                </StyledRecipeHeadingWrapper>
            </StyledRecipeHero>
        )
    }
}
