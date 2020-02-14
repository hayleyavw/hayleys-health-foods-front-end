import React from 'react'
import { StyledRecipeMethod } from './RecipeMethod.styled'

interface RecipeMethodProps {
    method: string
}

export class RecipeMethod extends React.Component<RecipeMethodProps> {
    render() {
        const ReactMarkdown = require('react-markdown/with-html')
        const { method } = this.props
        return (
            <StyledRecipeMethod>
                <ReactMarkdown source={method} />
            </StyledRecipeMethod>
        )
    }
}
