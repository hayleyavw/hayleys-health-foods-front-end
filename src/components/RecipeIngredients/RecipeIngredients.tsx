import React from 'react'

import { IngredientObject } from '../../api/DefaultObjects'
import { StyledRecipeIngredients } from './RecipeIngredients.styled'

interface RecipeIngredientsProps {
    ingredients: IngredientObject[]
}

export class RecipeIngredients extends React.Component<RecipeIngredientsProps> {
    render() {
        const { ingredients } = this.props
        return (
            <StyledRecipeIngredients>
                {ingredients.map(ingredient => (
                    <p>{ingredient.id}</p>
                ))}
            </StyledRecipeIngredients>
        )
    }
}
