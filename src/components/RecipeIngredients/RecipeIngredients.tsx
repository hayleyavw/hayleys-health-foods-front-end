import React from 'react'

import { IngredientObject } from '../../api/DefaultObjects'
import { StyledRecipeIngredients } from './RecipeIngredients.styled'

interface RecipeIngredientsProps {
    ingredients: IngredientObject[]
}

export class RecipeIngredients extends React.Component<RecipeIngredientsProps> {
    render() {
        return <StyledRecipeIngredients>These are the ingredients</StyledRecipeIngredients>
    }
}
