import React from 'react'
import {
    StyledRecipeHero,
    StyledRecipeHeadingWrapper,
    StyledRecipeHeroHeading,
    StyledRecipeHeroImage,
    StyledRecipeHeroImageWrapper,
    StyledRecipeHeroImageOverlay,
} from './RecipeHero.styled'
import { RecipeObject } from '../../api/DefaultObjects'

interface RecipeHeroProps {
    recipe: RecipeObject
}

export class RecipeHero extends React.Component<RecipeHeroProps> {
    render() {
        const api_url = process.env.REACT_APP_API_URL || ''
        return (
            <StyledRecipeHero>
                <StyledRecipeHeroImageWrapper>
                    <StyledRecipeHeroImage
                        image={
                            this.props.recipe.hero ? `${api_url}${this.props.recipe.hero.url}` : ''
                        }
                        src={
                            this.props.recipe.hero ? `${api_url}/${this.props.recipe.hero.url}` : ''
                        }
                    ></StyledRecipeHeroImage>
                    <StyledRecipeHeroImageOverlay />
                </StyledRecipeHeroImageWrapper>
                <StyledRecipeHeadingWrapper>
                    <StyledRecipeHeroHeading>{this.props.recipe.title}</StyledRecipeHeroHeading>
                </StyledRecipeHeadingWrapper>
            </StyledRecipeHero>
        )
    }
}
