import React from 'react'
import {
    StyledRecipeCard,
    StyledRecipeCardImage,
    StyledRecipeCardTitleOverlay,
} from './RecipeCard.styled'
import { Link } from 'react-router-dom'
import { HeroResponseObject, RecipeResponseObject } from '../../api/ResponseObjects'

interface RecipeCardProps {
    recipe: RecipeResponseObject
    isSmall?: boolean
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isSmall }) => {
    const api_url = process.env.REACT_APP_API_URL || ''
    return (
        <StyledRecipeCard isSmall={isSmall ? isSmall : false}>
            <Link to={`/recipes/${recipe.slug}`}>
                <StyledRecipeCardTitleOverlay>{recipe.title}</StyledRecipeCardTitleOverlay>
                <StyledRecipeCardImage src={recipe.hero ? `${api_url}/${recipe.hero.url}` : ''} />
            </Link>
        </StyledRecipeCard>
    )
}
