import React from 'react'
import { StyledRecipeStepsWrapper } from './RecipeSteps.styled'
import {
    Recipe,
    RecipeStep,
    IngredientGraphQLObject,
    Ingredients,
} from '../../api/recipes/ResponseShapes'

interface RecipeStepsProps {
    recipe: Recipe
}

interface State {
    currentStep: number
}

export class RecipeSteps extends React.Component<RecipeStepsProps> {
    public readonly state: Readonly<State> = {
        currentStep: 0,
    }

    constructor(props: RecipeStepsProps) {
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler() {}

    render() {
        const { recipe } = this.props
        console.log(recipe)
        return (
            <StyledRecipeStepsWrapper>
                {recipe.steps.map((step: RecipeStep) => (
                    <div>
                        <h2>{step.stepNumber}</h2>
                        <p>{step.description}</p>
                        {step.ingredients.map((ingredient: Ingredients) => (
                            <p>{ingredient.ingredient.name}</p>
                        ))}
                    </div>
                ))}
            </StyledRecipeStepsWrapper>
        )
    }
}
