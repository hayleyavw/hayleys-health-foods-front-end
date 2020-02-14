import React from 'react'

import { RecipeObject } from '../../api/DefaultObjects'
import { StyledRecipeSteps } from './RecipeSteps.styled'
import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients'
import { RecipeMethod } from '../RecipeMethod/RecipeMethod'

interface RecipeStepsProps {
    recipe: RecipeObject
}

export class RecipeSteps extends React.Component<RecipeStepsProps> {
    render() {
        return (
            <StyledRecipeSteps>
                <RecipeIngredients ingredients={this.props.recipe.ingredients} />
                <RecipeMethod method={this.props.recipe.method} />
            </StyledRecipeSteps>
        )
    }
}
