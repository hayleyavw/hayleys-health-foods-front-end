import React from "react";
import { StyledRecipeCard } from "./RecipeCard.styled";


interface RecipeCardProps {
    recipe: {}
}

export const RecipeCard = (recipe: string) => (
    <StyledRecipeCard>
        <p>{recipe}</p>
    </StyledRecipeCard>
)
