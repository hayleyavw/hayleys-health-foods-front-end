import React from 'react'
import { StyledHeadingOne, StyledHeadingTwo } from '../components/common/Headings.styled'
import { AboutMenu } from '../components/AboutMenu/AboutMenu'
import ReactMarkdown from 'react-markdown/with-html'

// interface State {
//     content: []
// }

// export class AboutPage extends React.Component {
//     public readonly state: Readonly<State> = {
//         content: [],
//     }

// componentDidMount() {
//     const api_url = process.env.REACT_APP_API_URL || ''
//     fetch(`${api_url}/welcomes?id=1`)
//         .then(results => {
//             return results.json()
//         })
//         .then(data => {
//             this.setState({ content: data[0]['Content'] })
//         })
// }

export const AboutPage: React.FC = () => {
    const content = getAboutContent('welcomes')

    return (
        <React.Fragment>
            <AboutMenu></AboutMenu>
            <StyledHeadingOne>Welcome</StyledHeadingOne>
            <ReactMarkdown source={content}></ReactMarkdown>
            <StyledHeadingTwo>With love,</StyledHeadingTwo>
            <StyledHeadingTwo>Hayley</StyledHeadingTwo>
        </React.Fragment>
    )
}

function getAboutContent(pageName: string) {
    const [content, setContent] = React.useState()

    React.useEffect(() => {
        fetch(`${api_url}/${pageName}?id=1`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                setContent(data[0]['Content'])
            })
    }, [pageName])

    return content
}
