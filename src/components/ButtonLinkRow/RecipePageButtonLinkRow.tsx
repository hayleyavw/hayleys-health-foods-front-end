import React from 'react'
import ReactGA from 'react-ga'
import {
    StyledButtonLinkRow,
    StyledButtonLinkRowButtonLink,
    StyledButtonLinkRowButtonLinkImage,
    StyledButtonLinkRowButtonLinkText,
    StyledButtonLinkRowWrapper,
} from './ButtonLinkRow.styled'
import { StyledHeadingTwo } from '../common/Headings.styled'

interface RecipePageButtonLinkRowProps {
    recipeTitle: string
}

export class RecipePageButtonLinkRow extends React.Component<RecipePageButtonLinkRowProps> {
    render() {
        const { recipeTitle } = this.props
        const supportIcon = require('../../assets/buy-me-a-smoothie.svg')
        const contactIcon = require('../../assets/contact.png')
        return (
            <StyledButtonLinkRowWrapper hasHeading={true}>
                <StyledHeadingTwo>Enjoyed this recipe?</StyledHeadingTwo>
                <StyledButtonLinkRow>
                    <StyledButtonLinkRowButtonLink
                        href="/about/contact"
                        onClick={() => {
                            ReactGA.event({
                                category: recipeTitle,
                                action: 'Button click',
                                label: 'Contact',
                            })
                        }}
                    >
                        <StyledButtonLinkRowButtonLinkImage src={contactIcon} alt={'Envelope.'} />
                        <StyledButtonLinkRowButtonLinkText>
                            Let me know!
                        </StyledButtonLinkRowButtonLinkText>
                    </StyledButtonLinkRowButtonLink>
                    <StyledButtonLinkRowButtonLink
                        href="/about/support"
                        onClick={() => {
                            ReactGA.event({
                                category: recipeTitle,
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
