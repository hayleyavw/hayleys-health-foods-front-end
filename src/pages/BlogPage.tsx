import React from 'react'
import * as H from 'history'
import { StyledHeadingOne } from '../components/common/Headings.styled'
import ReactMarkdown from 'react-markdown/with-html'
import { getBlogs } from '../api/common'

interface MatchParams {
    slug: string
}

interface Props extends RouteComponentProps<MatchParams> {}

export interface RouteComponentProps<P> {
    match: match<P>
    location: H.Location
    history: H.History
    staticContext?: any
}

export interface match<P> {
    params: P
    isExact: boolean
    path: string
    url: string
}

interface State {
    slug: string
    blogTitle: string
    blogContent: string
}
export class BlogPage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        blogTitle: '',
        blogContent: '',
        slug: this.props.match.params.slug,
    }

    componentDidMount() {
        getBlogs({ slug: this.state.slug }).then(data => {
            this.setState({ blogTitle: data[0].title })
            this.setState({ blogContent: data[0].content })
        })
    }

    render() {
        return (
            <React.Fragment>
                <StyledHeadingOne>{this.state.blogTitle}</StyledHeadingOne>
                <ReactMarkdown source={this.state.blogContent}></ReactMarkdown>
            </React.Fragment>
        )
    }
}
