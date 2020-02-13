import React from 'react'
import {
    StyledRecipeCard,
    StyledRecipeCardImage,
    StyledRecipeCardTitleOverlay,
} from './RecipeCard.styled'
import { Link } from 'react-router-dom'
import { HeroResponseObject } from '../../api/ResponseObjects'

interface RecipeCardProps {
    createdAt: string
    id?: number
    method: string
    slug: string
    title: string
    hero: HeroResponseObject
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
    createdAt,
    id,
    method,
    slug,
    title,
    hero,
}) => {
    const api_url = process.env.REACT_APP_API_URL || ''
    console.log(hero)
    return (
        <StyledRecipeCard>
            <Link to={`/recipes/${slug}`}>
                <StyledRecipeCardTitleOverlay>{title}</StyledRecipeCardTitleOverlay>
                <StyledRecipeCardImage src={hero ? `${api_url}/${hero.url}` : ''} />
            </Link>
        </StyledRecipeCard>
    )
}
