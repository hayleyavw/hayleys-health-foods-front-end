import React, { ChangeEvent } from 'react'
import ReactGA from 'react-ga'
import { Ingredients } from '../../../api/recipes/ResponseShapes'
import { Checkbox } from '../../common/Checkbox/Checkbox'
import { StyledRecipeIngredient } from './RecipeIngredients.styled'

interface RecipeIngredientProps {
    recipeTitle: string
    ingredient: Ingredients
    stepNumber: number
    currentStep: number
    handler: (stepNumber: number) => void
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
        this.checkedHandler = this.checkedHandler.bind(this)
    }

    componentDidUpdate(prevProps: RecipeIngredientProps) {
        if (this.props.currentStep !== prevProps.currentStep) {
            this.setState({ checked: this.props.stepNumber <= this.props.currentStep })
        }
    }

    checkedHandler(evt?: Event | ChangeEvent | undefined) {
        ReactGA.event({
            category: this.props.recipeTitle,
            action: 'Checkbox Click',
            label: 'Ingredient',
        })
        let checked = evt && evt.target ? (evt.target as any).checked : false
        this.setState({ checked: checked })
    }

    render() {
        const { ingredient } = this.props
        return (
            <StyledRecipeIngredient checked={this.state.checked}>
                <label>
                    <Checkbox checked={this.state.checked} handler={this.checkedHandler} />
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
