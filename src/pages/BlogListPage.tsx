import React from 'react'
import { BlogList } from '../components/BlogList/BlogList'
import { jsonld } from '../components/common/jsonld'
import Helmet from 'react-helmet'

const BlogListPage: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <script type="application/ld+json">{jsonld}</script>
            </Helmet>
            <BlogList />
        </React.Fragment>
    )
}

export default BlogListPage
