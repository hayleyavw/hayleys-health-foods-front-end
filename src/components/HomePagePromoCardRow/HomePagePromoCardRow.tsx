import React from 'react'
import ReactGA from 'react-ga'
import {
    StyledPromoCardRow,
    StyledPromoCardRowButtonLink,
    StyledPromoCardButtonLinkImage,
    StyledPromoCardButtonLinkText,
} from './HomePagePromoCardRow.styled'

export class HomePagePromoCardRow extends React.Component {
    render() {
        const blogIcon = require('../../assets/blog.png')
        const supportIcon = require('../../assets/buy-me-a-smoothie.svg')
        return (
            <StyledPromoCardRow>
                <StyledPromoCardRowButtonLink
                    href="/blog/"
                    onClick={() => {
                        ReactGA.event({
                            category: 'Promo',
                            action: 'Button click',
                            label: 'Blog',
                        })
                    }}
                >
                    <StyledPromoCardButtonLinkImage src={blogIcon} alt={'Thought bubble.'} />
                    <StyledPromoCardButtonLinkText>Read the Blog</StyledPromoCardButtonLinkText>
                </StyledPromoCardRowButtonLink>
                <StyledPromoCardRowButtonLink
                    href="/about/support"
                    onClick={() => {
                        ReactGA.event({
                            category: 'Promo',
                            action: 'Button click',
                            label: 'Support',
                        })
                    }}
                >
                    <StyledPromoCardButtonLinkImage src={supportIcon} alt={'Keep cup.'} />
                    <StyledPromoCardButtonLinkText>
                        Buy me a smoothie?
                    </StyledPromoCardButtonLinkText>
                </StyledPromoCardRowButtonLink>
            </StyledPromoCardRow>
        )
    }
}
