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
        const aboutIcon = require('../../assets/info.png')
        const supportIcon = require('../../assets/buy-me-a-smoothie.svg')
        return (
            <StyledPromoCardRow>
                <StyledPromoCardRowButtonLink
                    href="/about"
                    onClick={() => {
                        ReactGA.event({
                            category: 'Promo',
                            action: 'Button click',
                            label: 'About',
                        })
                    }}
                >
                    <StyledPromoCardButtonLinkImage src={aboutIcon} alt={'Information icon.'} />
                    <StyledPromoCardButtonLinkText>About the project</StyledPromoCardButtonLinkText>
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
