import React from 'react'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'
import { StyledHeadingOne } from '../../components/common/Headings.styled'
import ReactMarkdown from 'react-markdown/with-html'

interface State {
    content: []
}

export class MyStoryPage extends React.Component {
    public readonly state: Readonly<State> = {
        content: [],
    }

    componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL || ''
        fetch(`${api_url}/my-stories?id=1`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({ content: data[0]['Content'] })
            })
    }

    render() {
        return (
            <React.Fragment>
                <AboutMenu></AboutMenu>
                <StyledHeadingOne>My Story</StyledHeadingOne>
                <ReactMarkdown source={this.state.content}></ReactMarkdown>
            </React.Fragment>
        )
    }
}
