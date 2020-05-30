import React from 'react'
import { StyledRecipeInfoVerticalCard, StyledRecipeInfoCard } from './RecipeInfoCard.styled'
import { RecipeTime } from '../../api/recipes/ResponseShapes'

interface RecipeInfoCardProps {
    info: RecipeTime | string
}

export class RecipeInfoCard extends React.Component<RecipeInfoCardProps> {
    render() {
        const { info } = this.props

        let title
        let iconUrl
        let description

        if (typeof info === 'string') {
            title = 'Yields'
            iconUrl = require('./../../assets/serves.png')
            description = info
        } else {
            title = info.title
            iconUrl = require(`./../../assets/${info.category}.png`)
            description = info.duration
        }

        return (
            <StyledRecipeInfoCard>
                <img src={iconUrl} className="mobile-yield-img" alt="" />
                <StyledRecipeInfoVerticalCard>
                    <p className="recipe-info-heading">{title}</p>
                    <img src={iconUrl} className="yield-img" alt="" />
                    <p>{description}</p>
                </StyledRecipeInfoVerticalCard>
            </StyledRecipeInfoCard>
        )
    }
}
