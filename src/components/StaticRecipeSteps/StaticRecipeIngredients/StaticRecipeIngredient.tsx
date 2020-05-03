import React, { ChangeEvent } from 'react'
import ReactGA from 'react-ga'
import { Ingredients } from '../../../api/recipes/ResponseShapes'
import { Checkbox } from '../../common/Checkbox/Checkbox'
import { StyledStaticRecipeIngredient } from './StaticRecipeIngredients.styled'

interface RecipeIngredientProps {
    recipeTitle: string
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
        ReactGA.event({
            category: this.props.recipeTitle,
            action: 'Checkbox Click',
            label: 'Ingredient',
        })
        let checked = evt && evt.target ? (evt.target as any).checked : false
        this.setState({ checked: checked })
    }

    render() {
        const { recipeTitle, ingredient } = this.props
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
