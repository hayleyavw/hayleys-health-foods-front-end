import React from 'react'
import Helmet from 'react-helmet'
import { api_url } from '../../api/common'
import { BlogGraphQLObject } from '../../api/blogPosts/ResponseShapes'

interface Props {
    title: string
    imageURL: string
    content: string
    description: string
    createdAt: string
    updatedAt: string
}

export class BlogPostHead extends React.Component<Props> {
    render() {
        const { title, imageURL, content, description, createdAt, updatedAt } = this.props
        // const description = blogPost.content.match(/<p>(.*?)<\/p>/)![1]
        return (
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={`${description}`} />
                <script type="application/ld+json">
                    {generateBlogStructuredData(
                        title,
                        imageURL,
                        content,
                        description,
                        createdAt,
                        updatedAt
                    )}
                </script>
            </Helmet>
        )
    }
}

const generateBlogStructuredData = (
    title: string,
    imageURL: string,
    content: string,
    description: string,
    createdAt: string,
    updatedAt: string
) => {
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
        "image": "${api_url}${imageURL}",
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
