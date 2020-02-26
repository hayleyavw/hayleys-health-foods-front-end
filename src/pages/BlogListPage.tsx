import React from 'react'
import { BlogList } from '../components/BlogList/BlogList'
import { Nav } from '../components/Nav/Nav'
import { Footer } from '../components/Footer/Footer'

const BlogListPage: React.FC = () => {
    return (
        <React.Fragment>
            <Nav />
            <BlogList />
            <Footer />
        </React.Fragment>
    )
}

export default BlogListPage
