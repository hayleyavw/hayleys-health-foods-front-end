import React from 'react'
import ReactGA from 'react-ga'
import {
    StyledCard,
    StyledCardImage,
    StyledCardTextWrapper,
    StyledCardTitle,
    StyledCardDescription,
    StyledCardTitleWrapper,
    StyledCardSubtitle,
    StyledTagsWrapper,
} from './Card.styled'
import { Link } from 'react-router-dom'
import { buildImagePath } from '../../utils/utils'
import { TagObject } from '../../api/recipes/ResponseShapes'
import { TagLabel } from '../TagLabel/TagLabel'

interface CardProps {
    url: string
    title: string
    subtitle?: string
    description: string
    thumbnail: string
    tags?: TagObject[]
    page: string
}

export const Card: React.FC<CardProps> = ({
    url,
    title,
    subtitle,
    description,
    thumbnail,
    tags,
    page,
}) => {
    // Truncate the description
    if (description.length > 150) {
        description = `${description.slice(0, 150)}...`
    }

    return (
        <StyledCard>
            <Link
                to={url}
                onClick={() => {
                    ReactGA.event({
                        category: `${page} Recipe Card`,
                        action: 'Card Click',
                        label: title,
                    })
                }}
            >
                <StyledTagsWrapper>
                    {tags &&
                        tags.map((tag: TagObject, index) => (
                            <TagLabel key={`${index}-${title}`} text={tag.shortName} />
                        ))}
                </StyledTagsWrapper>
                <StyledCardTextWrapper className="card-text-wrapper">
                    <StyledCardTitleWrapper className="card-titles">
                        <StyledCardTitle>{title}</StyledCardTitle>
                        {subtitle ? <StyledCardSubtitle>{subtitle}</StyledCardSubtitle> : ''}
                    </StyledCardTitleWrapper>
                    <StyledCardDescription className="card-description">
                        {description}
                    </StyledCardDescription>
                </StyledCardTextWrapper>
                <StyledCardImage
                    src={`${buildImagePath(thumbnail)}`}
                    loading="lazy"
                    alt={`${title}.`}
                />
            </Link>
        </StyledCard>
    )
}
