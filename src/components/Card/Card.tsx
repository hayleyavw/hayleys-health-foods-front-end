import React from 'react'
import { StyledCard, StyledCardImage, StyledCardTitleOverlay } from './Card.styled'
import { Link } from 'react-router-dom'
import { HeroGraphQLObject } from '../../api/recipes/ResponseShapes'
import { api_url } from '../../api/common'

interface CardProps {
    slug: string
    title: string
    hero: HeroGraphQLObject
}

export const Card: React.FC<CardProps> = ({ slug, title, hero }) => {
    return (
        <StyledCard>
            <Link to={`/recipes/${slug}`}>
                <StyledCardTitleOverlay>{title}</StyledCardTitleOverlay>
                <StyledCardImage src={hero ? `${api_url}/${hero.url}` : ''} />
            </Link>
        </StyledCard>
    )
}
