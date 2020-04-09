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
import { ImagesGraphQLObject } from '../../api/common/ResponseShapes'

interface CardProps {
    url: string
    title: string
    subtitle?: string
    description: string
    images: ImagesGraphQLObject[] | string
    imageUrlPrefix?: string
}

export const Card: React.FC<CardProps> = ({
    url,
    title,
    subtitle,
    description,
    images,
    imageUrlPrefix,
}) => {
    // Truncate the description
    if (description.length > 150) {
        description = `${description.slice(0, 150)}...`
    }

    let imageUrl = ''
    if (typeof images !== 'string') {
        images.forEach((image: ImagesGraphQLObject) => {
            if (image.imageSize.size === 'thumbnail') {
                imageUrl = image.image.url
            }
        })
    } else {
        imageUrl = images
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
                <StyledCardImage src={`${imageUrlPrefix ? imageUrlPrefix : ''}${imageUrl}`} />
            </Link>
        </StyledCard>
    )
}
