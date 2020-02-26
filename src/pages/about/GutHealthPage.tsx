import React from 'react'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'
import { StyledHeadingOne } from '../../components/common/Headings.styled'

interface State {
    content: []
}

export class GutHealthPage extends React.Component {
    public readonly state: Readonly<State> = {
        content: [],
    }

    componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL || ''
        fetch(`${api_url}/gut-healths?id=1`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({ content: data[0]['Content'] })
            })
    }

    render() {
        const ReactMarkdown = require('react-markdown/with-html')
        return (
            <React.Fragment>
                <AboutMenu></AboutMenu>
                <StyledHeadingOne>What is Gut Health?</StyledHeadingOne>
                <ReactMarkdown source={this.state.content}></ReactMarkdown>
            </React.Fragment>
        )
    }
}
