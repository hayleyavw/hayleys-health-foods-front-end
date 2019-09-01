import React from 'react'
import { StyledRecipeCard, StyledRecipeCardImage } from './RecipeCard.styled'
import { Link } from 'react-router-dom'

interface RecipeCardProps {
    dateAdded: string
    id: number
    method: string
    slug: string
    title: string
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ dateAdded, id, method, slug, title }) => {
    return (
        <StyledRecipeCard>
            <Link to={`/recipes/${slug}`}>
                {/* <a href={`http://localhost:5000/recipes/${slug}`}> */}
                <p>{title}</p>
                <StyledRecipeCardImage src={`http://localhost:5000/images/${slug}`} />
                {/* </a> */}
            </Link>
        </StyledRecipeCard>
    )
}
