import React from 'react'
import {
    StyledRecipeIngredients,
    StyledRecipeIngredientsWrapper,
    StyledIngredientsGradientLine,
} from './RecipeIngredients.styled'
import { StyledHeadingTwo } from '../../common/Headings.styled'
import { Ingredients, RecipeStep } from '../../../api/recipes/ResponseShapes'
import { RecipeIngredient } from './RecipeIngredient'

interface RecipeIngredientsProps {
    recipeTitle: string
    steps: RecipeStep[]
    currentStep: number
    handler: (stepNumber: number) => void
}

export class RecipeIngredients extends React.Component<RecipeIngredientsProps> {
    render() {
        const { recipeTitle, steps, currentStep, handler } = this.props
        return (
            <StyledRecipeIngredientsWrapper>
                <StyledHeadingTwo>Ingredients</StyledHeadingTwo>
                <StyledRecipeIngredients>
                    {steps.map((step: RecipeStep) =>
                        step.ingredients.map((ingredient: Ingredients, index: number) => (
                            <RecipeIngredient
                                recipeTitle={recipeTitle}
                                ingredient={ingredient}
                                key={index}
                                stepNumber={step.stepNumber}
                                handler={handler}
                                currentStep={currentStep}
                            />
                        ))
                    )}
                </StyledRecipeIngredients>
                <StyledIngredientsGradientLine />
            </StyledRecipeIngredientsWrapper>
        )
    }
}
