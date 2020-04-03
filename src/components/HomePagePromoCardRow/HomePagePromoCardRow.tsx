import React from 'react'
import { StyledPromoCardRow } from './HomePagePromoCardRow.styled'
import { ButtonLink } from '../ButtonLink/ButtonLink'

export class HomePagePromoCardRow extends React.Component {
    render() {
        const blogIcon = require('../HomePagePromoCardRow/bubble.png')
        return (
            <StyledPromoCardRow>
                <ButtonLink
                    href="/blog/"
                    image={{
                        src: blogIcon,
                        alt: 'Thought bubble.',
                    }}
                    buttonText="Read the blog"
                />
                <ButtonLink
                    href="https://www.buymeacoffee.com/healthfoods"
                    image={{
                        src: 'https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg',
                        alt: 'Keep cup.',
                    }}
                    buttonText="Buy me a smoothie?"
                />
            </StyledPromoCardRow>
        )
    }
}

// <a target="_blank" href="https://icons8.com/icons/set/thinking-bubble">Thinking Bubble icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
