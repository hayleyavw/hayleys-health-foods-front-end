import React from 'react'
import { StyledRecipeMethod } from './RecipeMethod.styled'
import { StyledHeadingTwo } from '../../common/Headings.styled'
import ReactMarkdown from 'react-markdown/with-html'

interface RecipeMethodProps {
    method: string
}

export class RecipeMethod extends React.Component<RecipeMethodProps> {
    render() {
        const { method } = this.props
        return (
            <StyledRecipeMethod>
                <StyledHeadingTwo>Method</StyledHeadingTwo>
                <ReactMarkdown className="method-step" source={method} />
            </StyledRecipeMethod>
        )
    }
}
