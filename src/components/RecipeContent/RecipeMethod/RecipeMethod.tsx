import React from 'react'
import { StyledRecipeMethod } from './RecipeMethod.styled'
import { RecipeStep } from '../../../api/recipes/ResponseShapes'
import { StyledHeadingTwo } from '../../common/Headings.styled'
import { RecipeStepContainer } from './RecipeStepContainer/RecipeStepContainer'

interface RecipeMethodProps {
    method: RecipeStep[]
    currentStep: number
    handler: (stepNumber: number) => void
}

export class RecipeMethod extends React.Component<RecipeMethodProps> {
    render() {
        const { method, currentStep, handler } = this.props
        return (
            <StyledRecipeMethod>
                <StyledHeadingTwo>Method</StyledHeadingTwo>
                {method.map((step: RecipeStep, index: number) => (
                    <RecipeStepContainer
                        key={index}
                        step={step}
                        handler={handler}
                        currentStep={currentStep}
                    />
                ))}
            </StyledRecipeMethod>
        )
    }
}
