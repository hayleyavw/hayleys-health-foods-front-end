import React from 'react'
import * as H from 'history'
import { BlogGraphQLObject } from '../api/DefaultObjects'
import { StyledHeadingOne } from '../components/common/Headings.styled'
import ReactMarkdown from 'react-markdown/with-html'
import { getBlogsGraphQL, getBlogBySlug } from '../api/common'

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
    blogPost: any
}
export class BlogPage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        blogPost: new BlogGraphQLObject(),
        slug: this.props.match.params.slug,
    }

    async componentDidMount() {
        const blogData = await getBlogBySlug({ slug: this.state.slug })
        getBlogsGraphQL({ id: blogData[0].id }).then(data => {
            this.setState({ blogPost: data.data.blog })
        })
    }

    render() {
        return (
            <React.Fragment>
                <StyledHeadingOne>{this.state.blogPost.title}</StyledHeadingOne>
                <ReactMarkdown source={this.state.blogPost.content}></ReactMarkdown>
            </React.Fragment>
        )
    }
}
