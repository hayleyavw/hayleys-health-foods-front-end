import React from 'react'
import { StyledRecipeSteps } from './RecipeSteps.styled'
import { RecipeIngredients } from './RecipeIngredients/RecipeIngredients'
import { RecipeMethod } from './RecipeMethod/RecipeMethod'
import { IngredientsGraphQLObject } from '../../api/recipes/ResponseShapes'

interface RecipeStepsProps {
    method: string
    ingredients: IngredientsGraphQLObject[]
}

export class RecipeSteps extends React.Component<RecipeStepsProps> {
    render() {
        const { method, ingredients } = this.props
        return (
            <StyledRecipeSteps>
                <RecipeIngredients ingredients={ingredients} />
                <RecipeMethod method={method} />
            </StyledRecipeSteps>
        )
    }
}
