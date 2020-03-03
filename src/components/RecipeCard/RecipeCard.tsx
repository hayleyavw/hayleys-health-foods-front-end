import React from 'react'
import {
    StyledRecipeCard,
    StyledRecipeCardImage,
    StyledRecipeCardTitleOverlay,
} from './RecipeCard.styled'
import { Link } from 'react-router-dom'
import { RecipeGraphQLObject } from '../../api/recipes/ResponseShapes'
import { api_url } from '../../api/common'

interface RecipeCardProps {
    recipe: RecipeGraphQLObject
    isSmall?: boolean
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isSmall }) => {
    return (
        <StyledRecipeCard isSmall={isSmall ? isSmall : false}>
            <Link to={`/recipes/${recipe.slug}`}>
                <StyledRecipeCardTitleOverlay>{recipe.title}</StyledRecipeCardTitleOverlay>
                <StyledRecipeCardImage src={recipe.hero ? `${api_url}/${recipe.hero.url}` : ''} />
            </Link>
        </StyledRecipeCard>
    )
}
