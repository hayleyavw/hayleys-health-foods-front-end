import React from 'react'
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
                <StyledPromoCardRowButtonLink href="/blog/">
                    <StyledPromoCardButtonLinkImage src={blogIcon} alt={'Thought bubble.'} />
                    <StyledPromoCardButtonLinkText>Read the Blog</StyledPromoCardButtonLinkText>
                </StyledPromoCardRowButtonLink>
                <StyledPromoCardRowButtonLink href="/about/support">
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
