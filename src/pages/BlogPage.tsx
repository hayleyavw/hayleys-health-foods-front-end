import React from 'react'
import * as H from 'history'
import ReactMarkdown from 'react-markdown/with-html'
import { getBlogBySlug, getBlogsGraphQL } from '../api/blogPosts/Queries'
import { Hero } from '../components/Hero/Hero'
import { StyledContentBox } from '../components/common/ContentBox.styled'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { BlogPostHead } from '../components/CustomHead/BlogPostHead'
import { Blog } from '../api/blogPosts/ResponseShapes'
import Helmet from 'react-helmet'
import { jsonld } from '../components/common/jsonld'
import Loading from '../components/Loading/Loading'
import ErrorPage from '../components/ErrorPage/ErrorPage'

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
    blogPost: Blog
    loading: boolean
}
export class BlogPage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        slug: this.props.match.params.slug,
        blogPost: new Blog(),
        loading: true,
    }

    async componentDidMount() {
        try {
            const blogPost = await getBlogBySlug({ slug: this.state.slug })
            await getBlogsGraphQL({ id: blogPost.id }).then(blogPost => {
                this.setState({ blogPost: blogPost })
                this.setState({ loading: false })
            })
        } catch {
            this.setState({ loading: false })
        }
    }

    render() {
        const blogPost = this.state.blogPost
        const moment = require('moment')
        const createdAt = moment(blogPost.createdAt).format('Do MMM YYYY')

        function getDescription(content: string) {
            let description = content.split(/\r?\n/)
            if (description) {
                return description[0]
            }
            return 'Blog post by Hayley van Waas.'
        }

        return (
            <React.Fragment>
                {this.state.loading ? (
                    <React.Fragment>
                        <Helmet>
                            <script type="application/ld+json">{jsonld}</script>
                        </Helmet>
                        <StyledContentBox>
                            <Loading />
                        </StyledContentBox>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {blogPost.slug !== 'Loading...' ? (
                            <React.Fragment>
                                <BlogPostHead
                                    blogPost={blogPost}
                                    description={getDescription(blogPost.content)}
                                />
                                <Hero
                                    // heroImage={
                                    //     blogPost.largeImage.url ? blogPost.largeImage.url : ''
                                    // }
                                    smallImage={blogPost.thumbnail}
                                    mediumImage={blogPost.mediumImage}
                                    largeImage={blogPost.largeImage}
                                    title={blogPost.title}
                                    subtitle={createdAt}
                                />
                                <StyledContentBox>
                                    <ReactMarkdown source={blogPost.content}></ReactMarkdown>
                                    <StyledHeadingTwo>With love,</StyledHeadingTwo>
                                    <StyledHeadingTwo>Hayley</StyledHeadingTwo>
                                </StyledContentBox>
                            </React.Fragment>
                        ) : (
                            <ErrorPage />
                        )}
                    </React.Fragment>
                )}
            </React.Fragment>
        )
    }
}
