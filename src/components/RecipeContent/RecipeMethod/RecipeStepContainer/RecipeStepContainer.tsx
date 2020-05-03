import React, { ChangeEvent } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { RecipeStep } from '../../../../api/recipes/ResponseShapes'
import {
    StyledRecipeStepContainer,
    StyledRecipeStepCheckbox,
    StyledRecipeStepContent,
    StyledRecipeStepContentHeading,
} from './RecipeStepContainer.styled'

interface RecipeStepContainerProps {
    step: RecipeStep
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
        this.handler = this.handler.bind(this)
    }

    handler(evt?: Event | ChangeEvent | undefined) {
        let checked = evt && evt.target ? (evt.target as any).checked : false
        this.setState({ checked: checked })
    }
    render() {
        const { step } = this.props
        return (
            <StyledRecipeStepContainer>
                <label>
                    <StyledRecipeStepCheckbox checked={this.state.checked} handler={this.handler} />
                    <span>
                        <StyledRecipeStepContent>
                            <StyledRecipeStepContentHeading>
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
