import React from 'react'
import { StyledRecipeContentWrapper } from './RecipeContent.styled'
import { Recipe } from '../../api/recipes/ResponseShapes'
import { RecipeIngredients } from './RecipeIngredients/RecipeIngredients'
import { RecipeMethod } from './RecipeMethod/RecipeMethod'

interface RecipeContentProps {
    recipe: Recipe
}

interface State {
    currentStep: number
}

export class RecipeContent extends React.Component<RecipeContentProps> {
    public readonly state: Readonly<State> = {
        currentStep: 0,
    }

    constructor(props: RecipeContentProps) {
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler() {}

    render() {
        const { recipe } = this.props
        return (
            <StyledRecipeContentWrapper>
                <RecipeIngredients ingredients={recipe.ingredients} />
                <RecipeMethod method={recipe.steps} />
            </StyledRecipeContentWrapper>
        )
    }
}
