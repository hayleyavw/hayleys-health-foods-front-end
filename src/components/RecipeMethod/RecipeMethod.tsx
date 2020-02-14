import React from 'react'
import { StyledRecipeMethod } from './RecipeMethod.styled'

interface RecipeMethodProps {
    method: string
}

export class RecipeMethod extends React.Component<RecipeMethodProps> {
    render() {
        return <StyledRecipeMethod>This is the recipe method.</StyledRecipeMethod>
    }
}
