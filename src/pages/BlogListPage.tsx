import React from 'react'
import { BlogList } from '../components/BlogList/BlogList'
import { Nav } from '../components/Nav/Nav'

const BlogListPage: React.FC = () => {
    return (
        <div className="container">
            <Nav />
            <BlogList />
        </div>
    )
}

export default BlogListPage
