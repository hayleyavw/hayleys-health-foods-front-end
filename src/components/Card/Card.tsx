import React from 'react'
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
import { getStaticFilesPrefix } from '../../utils/utils'
import { Tag } from '../../api/recipes/ResponseShapes'
import { TagLabel } from '../TagLabel/TagLabel'

interface CardProps {
    url: string
    title: string
    subtitle?: string
    description: string
    thumbnail: string
    tags?: Tag[]
}

export const Card: React.FC<CardProps> = ({
    url,
    title,
    subtitle,
    description,
    thumbnail,
    tags,
}) => {
    // Truncate the description
    if (description.length > 150) {
        description = `${description.slice(0, 150)}...`
    }

    return (
        <StyledCard>
            <Link to={url}>
                <StyledTagsWrapper>
                    {tags &&
                        tags.map((tag: Tag, index) => (
                            <TagLabel key={index} text={tag.shortName} />
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
                <StyledCardImage src={`${getStaticFilesPrefix()}${thumbnail}`} />
            </Link>
        </StyledCard>
    )
}
