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
    steps: RecipeStep[]
}

export class RecipeIngredients extends React.Component<RecipeIngredientsProps> {
    render() {
        const { steps } = this.props
        return (
            <StyledRecipeIngredientsWrapper>
                <StyledHeadingTwo>Ingredients</StyledHeadingTwo>
                <StyledRecipeIngredients>
                    {steps.map((step: RecipeStep) =>
                        step.ingredients.map((ingredient: Ingredients, index: number) => (
                            <RecipeIngredient ingredient={ingredient} key={index} />
                        ))
                    )}
                </StyledRecipeIngredients>
                <StyledIngredientsGradientLine />
            </StyledRecipeIngredientsWrapper>
        )
    }
}
