import React, { ChangeEvent } from 'react'
import ReactGA from 'react-ga'
import ReactMarkdown from 'react-markdown/with-html'
import { RecipeStep } from '../../../../api/recipes/ResponseShapes'
import {
    StyledRecipeStepContainer,
    StyledRecipeStepCheckbox,
    StyledRecipeStepContent,
    StyledRecipeStepContentHeading,
} from './RecipeStepContainer.styled'

interface RecipeStepContainerProps {
    recipeTitle: string
    step: RecipeStep
    index: number
    currentStep: number
    handler: (stepNumber: number) => void
}

interface State {
    checked: boolean
}

export class RecipeStepContainer extends React.Component<RecipeStepContainerProps> {
    public readonly state: Readonly<State> = {
        checked: false,
    }

    constructor(props: RecipeStepContainerProps) {
        super(props)
        this.checkedHandler = this.checkedHandler.bind(this)
    }

    componentDidUpdate(prevProps: RecipeStepContainerProps) {
        if (this.props.currentStep !== prevProps.currentStep) {
            this.setState({ checked: this.props.step.stepNumber <= this.props.currentStep })
        }
    }

    checkedHandler(evt?: Event | ChangeEvent | undefined) {
        ReactGA.event({
            category: this.props.recipeTitle,
            action: 'Checkbox Click',
            label: 'Method Step',
        })
        let checked = evt && evt.target ? (evt.target as any).checked : false
        this.setState({ checked: checked })
        if (checked) {
            this.props.handler(this.props.step.stepNumber)
        } else {
            this.props.handler(this.props.step.stepNumber - 1)
        }
    }

    render() {
        const { recipeTitle, step, index, currentStep, handler } = this.props
        return (
            <StyledRecipeStepContainer checked={this.state.checked}>
                <label className={`step-${index}`}>
                    <StyledRecipeStepCheckbox
                        checked={this.state.checked}
                        handler={this.checkedHandler}
                    />
                    <span>
                        <StyledRecipeStepContent>
                            <StyledRecipeStepContentHeading checked={this.state.checked}>
                                Step {step.stepNumber}
                            </StyledRecipeStepContentHeading>
                            <ReactMarkdown className="method-step" source={step.description} />
                        </StyledRecipeStepContent>
                    </span>
                </label>
            </StyledRecipeStepContainer>
        )
    }
}
