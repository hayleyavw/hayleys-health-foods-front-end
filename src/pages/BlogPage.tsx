import React from 'react'
import * as H from 'history'
import ReactMarkdown from 'react-markdown/with-html'
import { getBlogBySlug, getBlogsGraphQL } from '../api/blogPosts/Queries'
import { Hero } from '../components/Hero/Hero'
import { StyledContentBox } from '../components/common/ContentBox.styled'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { BlogPostHead } from '../components/CustomHead/BlogPostHead'
import { BlogGraphQLObject } from '../api/blogPosts/ResponseShapes'

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
    description: string
}
export class BlogPage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        slug: this.props.match.params.slug,
        blogPost: {},
        description: '',
    }

    async componentDidMount() {
        const blogPost = await getBlogBySlug({ slug: this.state.slug })
        getBlogsGraphQL({ id: blogPost.id }).then(blogPost => {
            this.setState({ blogPost: blogPost })
            this.setState({
                description: (blogPost as BlogGraphQLObject).content.match(/<p>(.*?)<\/p>/)![1],
            })
        })
    }

    render() {
        const { blogPost, description } = this.state.blogPost
        const moment = require('moment')
        const createdAt = moment(blogPost.createdAt).format('Do MMM YYYY')
        let test = blogPost.content
        // console.log(test.match(/<p>(.*?)<\/p>/))
        // const description = blogPost.content.match(/<p>(.*?)<\/p>/)![1]
        // const description = 'test'
        return (
            <React.Fragment>
                <BlogPostHead
                    imageURL={blogPost.hero ? blogPost.hero.url : ''}
                    title={blogPost.title}
                    content={blogPost.content}
                    description={description}
                    createdAt={blogPost.createdAt}
                    updatedAt={blogPost.updatedAt}
                />
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
