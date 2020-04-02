import React from 'react'
import {
    StyledCard,
    StyledCardImage,
    StyledCardTextWrapper,
    StyledCardTitle,
    StyledCardDescription,
    StyledCardTitleWrapper,
    StyledCardSubtitle,
} from './Card.styled'
import { Link } from 'react-router-dom'
import { HeroGraphQLObject } from '../../api/recipes/ResponseShapes'
import { api_url } from '../../api/common'

interface CardProps {
    slug: string
    title: string
    subtitle?: string
    description: string
    hero: HeroGraphQLObject
}

export const Card: React.FC<CardProps> = ({ slug, title, subtitle, description, hero }) => {
    console.log(description.slice(0, 200))

    // Truncate the description
    if (description.length > 150) {
        description = `${description.slice(0, 150)}...`
    }
    return (
        <StyledCard>
            <Link to={`/recipes/${slug}`}>
                <StyledCardTextWrapper className="card-text-wrapper">
                    <StyledCardTitleWrapper className="card-titles">
                        <StyledCardTitle>{title}</StyledCardTitle>
                        {subtitle ? <StyledCardSubtitle>{subtitle}</StyledCardSubtitle> : ''}
                    </StyledCardTitleWrapper>
                    <StyledCardDescription className="card-description">
                        {description}
                    </StyledCardDescription>
                </StyledCardTextWrapper>
                <StyledCardImage src={hero ? `${api_url}/${hero.url}` : ''} />
            </Link>
        </StyledCard>
    )
}
