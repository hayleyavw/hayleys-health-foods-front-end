import React from 'react'
import {
    StyledFooterItem,
    StyledFooterColumn,
    StyledFooterLogo,
    StyledFooter,
    StyledFooterParagraph,
} from './Footer.styled'

export class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <StyledFooter>
                    <StyledFooterColumn>
                        <StyledFooterLogo to={'/'}>Hayley's Health Foods</StyledFooterLogo>
                    </StyledFooterColumn>
                    <StyledFooterColumn>
                        <StyledFooterItem to={'/'}>Recipes</StyledFooterItem>
                        <StyledFooterItem to={'/about'}>About</StyledFooterItem>
                        <StyledFooterItem to={'/about/support'}>Support</StyledFooterItem>
                    </StyledFooterColumn>
                </StyledFooter>
                <StyledFooterParagraph>
                    Info and Blog Icons made by{' '}
                    <a
                        href="https://www.flaticon.com/authors/prettycons"
                        title="prettyicons"
                        target="_blank"
                    >
                        prettyicons
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://www.flaticon.com/authors/freepik"
                        title="Freepik"
                        target="_blank"
                    >
                        Freepik
                    </a>{' '}
                    from{' '}
                    <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">
                        {' '}
                        www.flaticon.com
                    </a>
                </StyledFooterParagraph>
            </React.Fragment>
        )
    }
}
