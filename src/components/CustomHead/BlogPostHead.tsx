import React from 'react'
import Helmet from 'react-helmet'
import { api_url } from '../../api/common'
import { Blog } from '../../api/blogPosts/ResponseShapes'

interface Props {
    blogPost: Blog
    description: string
}

export class BlogPostHead extends React.Component<Props> {
    render() {
        const { blogPost, description } = this.props
        return (
            <Helmet>
                <title>{blogPost.title}</title>
                <meta name="description" content={`${description}`} />
                <script type="application/ld+json">
                    {generateBlogStructuredData(
                        blogPost.title,
                        blogPost.thumbnail.url,
                        blogPost.content,
                        description,
                        blogPost.createdAt,
                        blogPost.updatedAt
                    )}
                </script>
            </Helmet>
        )
    }
}

const generateBlogStructuredData = (
    title: string,
    imageUrl: string,
    content: string,
    description: string,
    createdAt: string,
    updatedAt: string
) => {
    let image = process.env.NODE_ENV !== 'production' ? `${api_url}/${imageUrl}` : imageUrl
    return `{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "hayley.codes"
        },
        "headline": "${title}",
        "description": "${description}",
        "articleBody": "${content}",
        "image": "${image}",
        "author": {
            "@type": "Person",
            "name": "Hayley van Waas"
        },
        "publisher": {
            "@type": "Organization",
            "name": "hayleyshealthfoods.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://hayleyshealthfoods.com/Favicon.icon"
            }
        },
        "datePublished": "${createdAt}",
        "dateModified": "${updatedAt}"
    }`
}
