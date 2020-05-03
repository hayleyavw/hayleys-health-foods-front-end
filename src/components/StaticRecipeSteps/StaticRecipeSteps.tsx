import React from 'react'
import { StyledRecipeSteps } from './StaticRecipeSteps.styled'
import { StaticRecipeIngredients } from './StaticRecipeIngredients/StaticRecipeIngredients'
import { StaticRecipeMethod } from './StaticRecipeMethod/StaticRecipeMethod'
import { Ingredients } from '../../api/recipes/ResponseShapes'

interface StaticRecipeStepsProps {
    method: string
    ingredients: Ingredients[]
}

export class StaticRecipeSteps extends React.Component<StaticRecipeStepsProps> {
    render() {
        const { method, ingredients } = this.props
        return (
            <StyledRecipeSteps>
                <StaticRecipeIngredients ingredients={ingredients} />
                <StaticRecipeMethod method={method} />
            </StyledRecipeSteps>
        )
    }
}
