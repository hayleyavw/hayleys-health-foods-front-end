import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingOne, StyledHeadingTwo } from '../components/common/Headings.styled'
import { Footer } from '../components/Footer/Footer'
import { AboutMenu } from '../components/AboutMenu/AboutMenu'

interface State {
    content: []
}

export class AboutPage extends React.Component {
    public readonly state: Readonly<State> = {
        content: [],
    }

    componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL || ''
        fetch(`${api_url}/welcomes?id=1`)
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
                <Nav />
                <AboutMenu></AboutMenu>
                <StyledHeadingOne>Welcome</StyledHeadingOne>
                <ReactMarkdown source={this.state.content}></ReactMarkdown>
                <StyledHeadingTwo>With love,</StyledHeadingTwo>
                <StyledHeadingTwo>Hayley</StyledHeadingTwo>
                <Footer />
            </React.Fragment>
        )
    }
}
