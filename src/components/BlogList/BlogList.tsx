import React from 'react'
import { StyledBlogList } from './BlogList.styled'
import { getBlogsGraphQL } from '../../api/blogPosts/Queries'
import { Card } from '../Card/Card'
import { BlogGraphQLObject } from '../../api/blogPosts/ResponseShapes'
import { StyledHeadingTwo } from '../common/Headings.styled'
import { api_url } from '../../api/common'
import Loading from '../Loading/Loading'

interface State {
    blogPosts: BlogGraphQLObject[]
    loading: boolean
}

export class BlogList extends React.Component {
    public readonly state: Readonly<State> = {
        blogPosts: [new BlogGraphQLObject()],
        loading: true,
    }

    async componentDidMount() {
        await getBlogsGraphQL({}).then(blogPosts => {
            this.setState({ blogPosts: blogPosts })
            this.setState({ loading: false })
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading ? (
                    <React.Fragment>
                        <Loading />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <StyledHeadingTwo>Blog</StyledHeadingTwo>
                        <StyledBlogList>
                            {this.state.blogPosts.map(function(blogPost, index) {
                                const moment = require('moment')
                                const createdAt = moment(blogPost.createdAt).format('Do MMM YYYY')
                                return (
                                    <Card
                                        key={index}
                                        url={`/blog/${blogPost.slug}`}
                                        title={blogPost.title}
                                        subtitle={createdAt}
                                        heroURL={
                                            process.env.NODE_ENV !== 'production'
                                                ? `${api_url}/${blogPost.hero.url}`
                                                : blogPost.hero.url
                                        }
                                        description={blogPost.content}
                                    />
                                )
                            })}
                        </StyledBlogList>
                    </React.Fragment>
                )}
            </React.Fragment>
        )
    }
}
