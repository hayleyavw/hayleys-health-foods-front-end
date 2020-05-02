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
                    Blog Icon made by{' '}
                    <a
                        href="https://www.flaticon.com/authors/freepik"
                        title="Freepik"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Freepik
                    </a>{' '}
                    from{' '}
                    <a
                        href="https://www.flaticon.com/"
                        title="Flaticon"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        www.flaticon.com
                    </a>
                    {/* Icons made by <a href="https://www.flaticon.com/authors/pause08" title="Pause08">Pause08</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                </StyledFooterParagraph>
            </React.Fragment>
        )
    }
}
