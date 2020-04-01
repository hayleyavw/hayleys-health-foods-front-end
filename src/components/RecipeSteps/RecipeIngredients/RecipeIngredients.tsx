import React from 'react'
import {
    StyledRecipeIngredients,
    StyledRecipeIngredientsWrapper,
    StyledRecipeIngredient,
} from './RecipeIngredients.styled'
import { StyledHeadingTwo } from '../../common/Headings.styled'
import { IngredientsGraphQLObject } from '../../../api/recipes/ResponseShapes'

interface RecipeIngredientsProps {
    ingredients: IngredientsGraphQLObject[]
}

export class RecipeIngredients extends React.Component<RecipeIngredientsProps> {
    render() {
        const { ingredients } = this.props
        return (
            <StyledRecipeIngredientsWrapper>
                <StyledHeadingTwo>Ingredients</StyledHeadingTwo>
                <StyledRecipeIngredients>
                    {ingredients.map((ingredient: IngredientsGraphQLObject, index: number) => (
                        <StyledRecipeIngredient key={index}>
                            {ingredient.ingredient.name} ({ingredient.quantity}{' '}
                            {ingredient.ingredientUnit ? ingredient.ingredientUnit.shortName : ''})
                        </StyledRecipeIngredient>
                    ))}
                </StyledRecipeIngredients>
            </StyledRecipeIngredientsWrapper>
        )
    }
}
