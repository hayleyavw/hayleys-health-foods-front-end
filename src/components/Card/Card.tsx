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
import { getStaticFilesPrefix } from '../Hero/utils'

interface CardProps {
    url: string
    title: string
    subtitle?: string
    description: string
    thumbnail: string
}

export const Card: React.FC<CardProps> = ({ url, title, subtitle, description, thumbnail }) => {
    // Truncate the description
    if (description.length > 150) {
        description = `${description.slice(0, 150)}...`
    }

    return (
        <StyledCard>
            <Link to={url}>
                <StyledCardTextWrapper className="card-text-wrapper">
                    <StyledCardTitleWrapper className="card-titles">
                        <StyledCardTitle>{title}</StyledCardTitle>
                        {subtitle ? <StyledCardSubtitle>{subtitle}</StyledCardSubtitle> : ''}
                    </StyledCardTitleWrapper>
                    <StyledCardDescription className="card-description">
                        {description}
                    </StyledCardDescription>
                </StyledCardTextWrapper>
                <StyledCardImage src={`${getStaticFilesPrefix()}${thumbnail}`} />
            </Link>
        </StyledCard>
    )
}
