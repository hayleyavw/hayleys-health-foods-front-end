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
        const blogIcon = require('../HomePagePromoCardRow/bubble.png')
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
                    <StyledPromoCardButtonLinkImage
                        src={'https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'}
                        alt={'Keep cup.'}
                    />
                    <StyledPromoCardButtonLinkText>
                        Buy me a smoothie?
                    </StyledPromoCardButtonLinkText>
                </StyledPromoCardRowButtonLink>
            </StyledPromoCardRow>
        )
    }
}

// <a target="_blank" href="https://icons8.com/icons/set/thinking-bubble">Thinking Bubble icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
