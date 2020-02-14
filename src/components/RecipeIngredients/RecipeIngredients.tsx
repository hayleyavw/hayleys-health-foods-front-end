import React from 'react'

import { IngredientsGraphQLObject } from '../../api/DefaultObjects'
import { StyledRecipeIngredients } from './RecipeIngredients.styled'

interface RecipeIngredientsProps {
    ingredients: IngredientsGraphQLObject[]
}

export class RecipeIngredients extends React.Component<RecipeIngredientsProps> {
    render() {
        const { ingredients } = this.props
        console.log(ingredients)
        return (
            <StyledRecipeIngredients>
                {ingredients.map(ingredient => (
                    <p>
                        {ingredient.ingredient.name}({ingredient.ingredient_unit.short_name})
                    </p>
                ))}
            </StyledRecipeIngredients>
        )
    }
}
