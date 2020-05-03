import React from 'react'
import { StyledRecipeMethod } from './RecipeMethod.styled'
import { RecipeStep } from '../../../api/recipes/ResponseShapes'
import { StyledHeadingTwo } from '../../common/Headings.styled'
import { RecipeStepContainer } from './RecipeStepContainer/RecipeStepContainer'

interface RecipeMethodProps {
    method: RecipeStep[]
}

export class RecipeMethod extends React.Component<RecipeMethodProps> {
    render() {
        const { method } = this.props
        return (
            <StyledRecipeMethod>
                <StyledHeadingTwo>Method</StyledHeadingTwo>
                {method.map((step: RecipeStep, index: number) => (
                    <RecipeStepContainer key={index} step={step} />
                ))}
            </StyledRecipeMethod>
        )
    }
}
