import React from 'react'
import ReactGA from 'react-ga'
import { StyledNav, StyledNavItem, StyledNavColumn, StyledNavLogo } from './Nav.styled'

function GAEvent(label: string) {
    ReactGA.event({
        category: 'Navigation',
        action: 'Main Nav Link Click',
        label: label,
    })
}

export const Nav: React.FC = () => {
    return (
        <StyledNav>
            <StyledNavColumn>
                <StyledNavLogo
                    to={'/'}
                    onClick={() => {
                        GAEvent("Hayley's Health Foods")
                    }}
                >
                    Hayley's Health Foods
                </StyledNavLogo>
            </StyledNavColumn>
            <StyledNavColumn>
                <StyledNavItem
                    to={'/'}
                    onClick={() => {
                        GAEvent('Recipes')
                    }}
                >
                    Recipes
                </StyledNavItem>
                <StyledNavItem
                    to={'/about'}
                    onClick={() => {
                        GAEvent('About')
                    }}
                >
                    About
                </StyledNavItem>
                <StyledNavItem
                    to={'/about/support'}
                    onClick={() => {
                        GAEvent('Support')
                    }}
                >
                    Support
                </StyledNavItem>
            </StyledNavColumn>
        </StyledNav>
    )
}
