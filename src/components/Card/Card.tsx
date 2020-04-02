import React from 'react'
import {
    StyledCard,
    StyledCardImage,
    StyledCardTitleWrapper,
    StyledCardTitle,
    StyledCardDescription,
} from './Card.styled'
import { Link } from 'react-router-dom'
import { HeroGraphQLObject } from '../../api/recipes/ResponseShapes'
import { api_url } from '../../api/common'

interface CardProps {
    slug: string
    title: string
    description: string
    hero: HeroGraphQLObject
}

export const Card: React.FC<CardProps> = ({ slug, title, description, hero }) => {
    return (
        <StyledCard>
            <Link to={`/recipes/${slug}`}>
                <StyledCardTitleWrapper className="card-text-wrapper">
                    <StyledCardTitle>{title}</StyledCardTitle>
                    <StyledCardDescription className="card-description">
                        {description}
                    </StyledCardDescription>
                </StyledCardTitleWrapper>
                <StyledCardImage src={hero ? `${api_url}/${hero.url}` : ''} />
            </Link>
        </StyledCard>
    )
}
