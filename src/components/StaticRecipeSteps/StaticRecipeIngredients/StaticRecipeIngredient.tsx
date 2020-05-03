import React, { ChangeEvent } from 'react'
import { Ingredients } from '../../../api/recipes/ResponseShapes'
import { Checkbox } from '../../common/Checkbox/Checkbox'
import { StyledStaticRecipeIngredient } from './StaticRecipeIngredients.styled'

interface RecipeIngredientProps {
    ingredient: Ingredients
}

interface State {
    checked: boolean
}

export class StaticRecipeIngredient extends React.Component<RecipeIngredientProps> {
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
            <StyledStaticRecipeIngredient checked={this.state.checked}>
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
            </StyledStaticRecipeIngredient>
        )
    }
}
