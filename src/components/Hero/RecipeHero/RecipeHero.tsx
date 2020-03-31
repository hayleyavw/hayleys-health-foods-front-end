import React from 'react'
import {
    StyledHeroHeadingWrapper,
    StyledHeroHeading,
    StyledHeroImage,
    StyledHero,
    StyledHeroGradientLine,
    StyledHeroWrapper,
} from '../Hero.styled'

interface RecipeHeroProps {
    heroImage: string
    recipeTitle: string
}

export class RecipeHero extends React.Component<RecipeHeroProps> {
    render() {
        const api_url = process.env.REACT_APP_API_URL || ''
        return (
            <StyledHeroWrapper>
                <StyledHero>
                    <StyledHeroImage src={`${api_url}${this.props.heroImage}`}></StyledHeroImage>
                    <StyledHeroHeadingWrapper>
                        <StyledHeroHeading>{this.props.recipeTitle}</StyledHeroHeading>
                    </StyledHeroHeadingWrapper>
                </StyledHero>
                <StyledHeroGradientLine />
            </StyledHeroWrapper>
        )
    }
}
