import React from 'react'
import { Link } from 'react-router-dom'
import { StyledBlogCard } from './BlogCard.styled'

interface BlogCardProps {
    id?: number
    slug: string
    title: string
}

export const BlogCard: React.FC<BlogCardProps> = ({ slug, title }) => {
    return (
        <StyledBlogCard>
            <Link to={`/blog/${slug}`}>{title}</Link>
        </StyledBlogCard>
    )
}
