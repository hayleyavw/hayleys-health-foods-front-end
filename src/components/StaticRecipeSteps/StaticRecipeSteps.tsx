import React from 'react'
import { StyledRecipeSteps } from './StaticRecipeSteps.styled'
import { StaticRecipeIngredients } from './StaticRecipeIngredients/StaticRecipeIngredients'
import { StaticRecipeMethod } from './StaticRecipeMethod/StaticRecipeMethod'
import { Ingredients } from '../../api/recipes/ResponseShapes'

interface StaticRecipeStepsProps {
    recipeTitle: string
    method: string
    ingredients: Ingredients[]
}

export class StaticRecipeSteps extends React.Component<StaticRecipeStepsProps> {
    render() {
        const { recipeTitle, method, ingredients } = this.props
        return (
            <StyledRecipeSteps>
                <StaticRecipeIngredients recipeTitle={recipeTitle} ingredients={ingredients} />
                <StaticRecipeMethod method={method} />
            </StyledRecipeSteps>
        )
    }
}
