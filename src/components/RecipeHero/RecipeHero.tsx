import React from 'react'
import {
    StyledRecipeHero,
    StyledRecipeHeroWrapper,
    StyledRecipeHeadingWrapper,
    StyledRecipeHeroHeading,
    StyledRecipeHeroImage,
} from './RecipeHero.styled'
import { RecipeObject } from '../../api/DefaultObjects'

interface RecipeHeroProps {
    recipe: RecipeObject
}

export class RecipeHero extends React.Component<RecipeHeroProps> {
    render() {
        const api_url = process.env.REACT_APP_API_URL || ''
        return (
            <StyledRecipeHeroWrapper>
                <StyledRecipeHero>
                    <StyledRecipeHeroImage
                        src={
                            this.props.recipe.hero ? `${api_url}/${this.props.recipe.hero.url}` : ''
                        }
                    ></StyledRecipeHeroImage>
                    <StyledRecipeHeadingWrapper>
                        <StyledRecipeHeroHeading>{this.props.recipe.title}</StyledRecipeHeroHeading>
                    </StyledRecipeHeadingWrapper>
                </StyledRecipeHero>
            </StyledRecipeHeroWrapper>
        )
    }
}
