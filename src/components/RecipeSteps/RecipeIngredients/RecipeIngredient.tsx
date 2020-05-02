import React, { ChangeEvent } from 'react'
import { Ingredients } from '../../../api/recipes/ResponseShapes'
import { Checkbox } from '../../common/Checkbox/Checkbox'
import { StyledRecipeIngredient } from './RecipeIngredients.styled'

interface RecipeIngredientProps {
    ingredient: Ingredients
}

interface State {
    checked: boolean
}

export class RecipeIngredient extends React.Component<RecipeIngredientProps> {
    public readonly state: Readonly<State> = {
        checked: false,
    }

    constructor(props: RecipeIngredientProps) {
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler(evt?: Event | ChangeEvent | undefined) {
        let checked = evt && evt.target ? (evt.target as any).checked : false
        this.setState({ checked: checked })
    }

    render() {
        const { ingredient } = this.props
        return (
            <StyledRecipeIngredient checked={this.state.checked}>
                <label>
                    <Checkbox checked={this.state.checked} handler={this.handler} />
                    <span>
                        {ingredient.ingredient.name} ({ingredient.quantity}
                        {ingredient.ingredientUnit.shortName !== 'Loading...'
                            ? ` ${ingredient.ingredientUnit.shortName}`
                            : ''}
                        )
                    </span>
                </label>
            </StyledRecipeIngredient>
        )
    }
}
