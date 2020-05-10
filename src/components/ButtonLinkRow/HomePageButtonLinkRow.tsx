import React from 'react'
import ReactGA from 'react-ga'
import {
    StyledButtonLinkRow,
    StyledButtonLinkRowButtonLink,
    StyledButtonLinkRowButtonLinkImage,
    StyledButtonLinkRowButtonLinkText,
    StyledButtonLinkRowWrapper,
} from './ButtonLinkRow.styled'

export class HomePageButtonLinkRow extends React.Component {
    render() {
        const aboutIcon = require('../../assets/info.png')
        const supportIcon = require('../../assets/buy-me-a-smoothie.svg')
        return (
            <StyledButtonLinkRowWrapper>
                <StyledButtonLinkRow>
                    <StyledButtonLinkRowButtonLink
                        href="/about"
                        onClick={() => {
                            ReactGA.event({
                                category: 'Promo',
                                action: 'Button click',
                                label: 'About',
                            })
                        }}
                    >
                        <StyledButtonLinkRowButtonLinkImage
                            src={aboutIcon}
                            alt={'Information icon.'}
                        />
                        <StyledButtonLinkRowButtonLinkText>
                            About the project
                        </StyledButtonLinkRowButtonLinkText>
                    </StyledButtonLinkRowButtonLink>
                    <StyledButtonLinkRowButtonLink
                        href="/about/support"
                        onClick={() => {
                            ReactGA.event({
                                category: 'Promo',
                                action: 'Button click',
                                label: 'Support',
                            })
                        }}
                    >
                        <StyledButtonLinkRowButtonLinkImage src={supportIcon} alt={'Keep cup.'} />
                        <StyledButtonLinkRowButtonLinkText>
                            Buy me a smoothie?
                        </StyledButtonLinkRowButtonLinkText>
                    </StyledButtonLinkRowButtonLink>
                </StyledButtonLinkRow>
            </StyledButtonLinkRowWrapper>
        )
    }
}
