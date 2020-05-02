import React from 'react'
import { StyledRecipeFooter, StyledRecipeFooterButtons } from './RecipeFooter.styled'
import ReactGA from 'react-ga'
import {
    StyledButtonLink,
    StyledButtonLinkImage,
    StyledButtonLinkText,
} from '../ButtonLink/ButtonLink.styled'
import { StyledHeadingTwo } from '../common/Headings.styled'

interface RecipeFooterProps {
    recipeTitle: string
}

export const RecipeFooter: React.FC<RecipeFooterProps> = ({ recipeTitle }) => {
    const supportIcon = require('../../assets/buy-me-a-smoothie.svg')
    const contactIcon = require('../../assets/contact.png')
    return (
        <StyledRecipeFooter>
            <StyledHeadingTwo>Enjoyed this recipe?</StyledHeadingTwo>
            <StyledRecipeFooterButtons>
                <StyledButtonLink
                    href="/about/contact"
                    onClick={() => {
                        ReactGA.event({
                            category: recipeTitle,
                            action: 'Button click',
                            label: 'Contact',
                        })
                    }}
                >
                    <StyledButtonLinkImage src={contactIcon} alt={'Keep cup.'} />
                    <StyledButtonLinkText>Let me know!</StyledButtonLinkText>
                </StyledButtonLink>
                <StyledButtonLink
                    href="/about/support"
                    onClick={() => {
                        ReactGA.event({
                            category: recipeTitle,
                            action: 'Button click',
                            label: 'Support',
                        })
                    }}
                >
                    <StyledButtonLinkImage src={supportIcon} alt={'Keep cup.'} />
                    <StyledButtonLinkText>Buy me a smoothie?</StyledButtonLinkText>
                </StyledButtonLink>
            </StyledRecipeFooterButtons>
        </StyledRecipeFooter>
    )
}
