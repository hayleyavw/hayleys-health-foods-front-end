import React from 'react'
import { StyledStaticRecipeMethod } from './StaticRecipeMethod.styled'
import { StyledHeadingTwo } from '../../common/Headings.styled'
import ReactMarkdown from 'react-markdown/with-html'

interface StaticRecipeMethodProps {
    method: string
}

export class StaticRecipeMethod extends React.Component<StaticRecipeMethodProps> {
    render() {
        const { method } = this.props
        return (
            <StyledStaticRecipeMethod>
                <StyledHeadingTwo>Method</StyledHeadingTwo>
                <ReactMarkdown className="method-step" source={method} />
            </StyledStaticRecipeMethod>
        )
    }
}
