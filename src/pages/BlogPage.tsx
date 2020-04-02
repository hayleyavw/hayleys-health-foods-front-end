import React from 'react'
import * as H from 'history'
import ReactMarkdown from 'react-markdown/with-html'
import { getBlogBySlug, getBlogsGraphQL } from '../api/blogPosts/Queries'
import { Hero } from '../components/Hero/Hero'
import { StyledContentBox } from '../components/common/ContentBox.styled'
import { StyledHeadingTwo } from '../components/common/Headings.styled'

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
        slug: this.props.match.params.slug,
        blogPost: {},
    }

    async componentDidMount() {
        const blogPost = await getBlogBySlug({ slug: this.state.slug })
        getBlogsGraphQL({ id: blogPost.id }).then(blogPost => {
            this.setState({ blogPost: blogPost })
        })
    }

    render() {
        const blogPost = this.state.blogPost
        const moment = require('moment')
        const createdAt = moment(blogPost.createdAt).format('Do MMM YYYY')
        return (
            <React.Fragment>
                <Hero
                    heroImage={blogPost.hero ? blogPost.hero.url : ''}
                    title={blogPost.title}
                    subtitle={createdAt}
                />
                <StyledContentBox>
                    <ReactMarkdown source={blogPost.content}></ReactMarkdown>
                    <StyledHeadingTwo>With love,</StyledHeadingTwo>
                    <StyledHeadingTwo>Hayley</StyledHeadingTwo>
                </StyledContentBox>
            </React.Fragment>
        )
    }
}
