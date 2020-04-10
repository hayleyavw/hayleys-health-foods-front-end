import React from 'react'
import {
    StyledRecipeIngredients,
    StyledRecipeIngredientsWrapper,
    StyledRecipeIngredient,
} from './RecipeIngredients.styled'
import { StyledHeadingTwo } from '../../common/Headings.styled'
import { Ingredients } from '../../../api/recipes/ResponseShapes'

interface RecipeIngredientsProps {
    ingredients: Ingredients[]
}

export class RecipeIngredients extends React.Component<RecipeIngredientsProps> {
    render() {
        const { ingredients } = this.props
        return (
            <StyledRecipeIngredientsWrapper>
                <StyledHeadingTwo>Ingredients</StyledHeadingTwo>
                <StyledRecipeIngredients>
                    {ingredients.map((ingredient: Ingredients, index: number) => (
                        <StyledRecipeIngredient key={index}>
                            {ingredient.ingredient.name} ({ingredient.quantity}
                            {ingredient.ingredientUnit.shortName !== 'Loading...'
                                ? ` ${ingredient.ingredientUnit.shortName}`
                                : ''}
                            )
                        </StyledRecipeIngredient>
                    ))}
                </StyledRecipeIngredients>
            </StyledRecipeIngredientsWrapper>
        )
    }
}
