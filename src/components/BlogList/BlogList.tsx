import React from 'react'
import { StyledBlogList } from './BlogList.styled'
import { getBlogsGraphQL } from '../../api/blogPosts/Queries'
import { Card } from '../Card/Card'
import { BlogGraphQLObject } from '../../api/blogPosts/ResponseShapes'
import { StyledHeadingTwo } from '../common/Headings.styled'
import { api_url } from '../../api/common'

interface State {
    blogPosts: BlogGraphQLObject[]
}

export class BlogList extends React.Component {
    public readonly state: Readonly<State> = {
        blogPosts: [new BlogGraphQLObject()],
    }

    componentDidMount() {
        getBlogsGraphQL({}).then(blogPosts => {
            this.setState({ blogPosts: blogPosts })
        })
    }

    render() {
        return (
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
                                heroURL={`${api_url}/${blogPost.hero.url}`}
                                description={blogPost.content}
                            />
                        )
                    })}
                </StyledBlogList>
            </React.Fragment>
        )
    }
}
