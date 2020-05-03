import React from 'react'
import {
    StyledStaticRecipeIngredients,
    StyledStaticRecipeIngredientsWrapper,
    StyledStaticIngredientsGradientLine,
} from './StaticRecipeIngredients.styled'
import { StyledHeadingTwo } from '../../common/Headings.styled'
import { Ingredients } from '../../../api/recipes/ResponseShapes'
import { StaticRecipeIngredient } from './StaticRecipeIngredient'

interface StaticRecipeIngredientsProps {
    recipeTitle: string
    ingredients: Ingredients[]
}

export class StaticRecipeIngredients extends React.Component<StaticRecipeIngredientsProps> {
    render() {
        const { recipeTitle, ingredients } = this.props
        return (
            <StyledStaticRecipeIngredientsWrapper>
                <StyledHeadingTwo>Ingredients</StyledHeadingTwo>
                <StyledStaticRecipeIngredients>
                    {ingredients.map((ingredient: Ingredients, index: number) => (
                        <StaticRecipeIngredient
                            recipeTitle={recipeTitle}
                            ingredient={ingredient}
                            key={index}
                        />
                    ))}
                </StyledStaticRecipeIngredients>
                <StyledStaticIngredientsGradientLine />
            </StyledStaticRecipeIngredientsWrapper>
        )
    }
}
