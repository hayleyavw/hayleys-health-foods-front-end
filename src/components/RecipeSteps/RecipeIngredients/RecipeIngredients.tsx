import React from 'react'
import {
    StyledRecipeIngredients,
    StyledRecipeIngredientsWrapper,
    StyledIngredientsGradientLine,
} from './RecipeIngredients.styled'
import { StyledHeadingTwo } from '../../common/Headings.styled'
import { Ingredients } from '../../../api/recipes/ResponseShapes'
import { RecipeIngredient } from './RecipeIngredient'

interface RecipeIngredientsProps {
    ingredients: Ingredients[]
}

export class RecipeIngredients extends React.Component<RecipeIngredientsProps> {
    render() {
        const { ingredients } = this.props
        return (
            <StyledRecipeIngredientsWrapper>
                <StyledHeadingTwo>Ingredients</StyledHeadingTwo>
                <StyledRecipeIngredients>
                    {ingredients.map((ingredient: Ingredients, index: number) => (
                        <RecipeIngredient ingredient={ingredient} key={index} />
                    ))}
                </StyledRecipeIngredients>
                <StyledIngredientsGradientLine />
            </StyledRecipeIngredientsWrapper>
        )
    }
}
