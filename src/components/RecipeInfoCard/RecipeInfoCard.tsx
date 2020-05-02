import React from 'react'
import { StyledRecipeInfoVerticalCard, StyledRecipeInfoCard } from './RecipeInfoCard.styled'

interface RecipeInfoCardProps {
    type: 'yield' | 'prepTime' | 'cookTime'
    description: string
}

export class RecipeInfoCard extends React.Component<RecipeInfoCardProps> {
    render() {
        const { type, description } = this.props

        let title
        let iconUrl

        switch (type) {
            case 'yield':
                title = 'Yields'
                iconUrl = require('./../../assets/plate.png')
                break
            case 'prepTime':
                title = 'Prep Time'
                iconUrl = require('./../../assets/prep-time.png')
                break
            case 'cookTime':
                title = 'Cook Time'
                iconUrl = require('./../../assets/cook-time.png')
                break
            default:
                break
        }

        return (
            <StyledRecipeInfoCard>
                <img src={iconUrl} className="mobile-yield-img" alt="Plate with knife and fork." />
                <StyledRecipeInfoVerticalCard>
                    <p className="recipe-info-heading">{title}</p>
                    <img src={iconUrl} className="yield-img" alt="Plate with knife and fork." />
                    <p>{description}</p>
                </StyledRecipeInfoVerticalCard>
            </StyledRecipeInfoCard>
        )
    }
}
