import React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";

const recipes = ['apple sauce', 'almond milk', 'orange cake']

export const RecipeList = () => {
    return (
        <div>
            {recipes.map(recipe => (
                RecipeCard(recipe)
            ))}
        </div>
    )
}
