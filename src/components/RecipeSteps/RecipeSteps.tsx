import React from 'react'

import { IngredientObject } from '../../api/DefaultObjects'
import { StyledRecipeSteps } from './RecipeSteps.styled'
import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients'
import { RecipeMethod } from '../RecipeMethod/RecipeMethod'

interface RecipeStepsProps {
    method: string
    ingredients: IngredientObject[]
}

export class RecipeSteps extends React.Component<RecipeStepsProps> {
    render() {
        const { method, ingredients } = this.props
        console.log(ingredients)
        return (
            <StyledRecipeSteps>
                <RecipeIngredients ingredients={ingredients} />
                <RecipeMethod method={method} />
            </StyledRecipeSteps>
        )
    }
}
