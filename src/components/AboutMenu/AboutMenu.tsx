import React from 'react'
import ReactGA from 'react-ga'
import { StyledAboutMenu, StyledMenuItems } from './AboutMenu.styled'

function GAEvent(label: string) {
    ReactGA.event({
        category: 'Navigation',
        action: 'Main Nav Link Click',
        label: label,
    })
}

export const AboutMenu: React.FC = () => {
    return (
        <StyledAboutMenu>
            <StyledMenuItems
                to={'/about'}
                onClick={() => {
                    GAEvent('Welcome')
                }}
            >
                Welcome
            </StyledMenuItems>
            <StyledMenuItems
                to={'/about/gut-health'}
                onClick={() => {
                    GAEvent('Gut Health')
                }}
            >
                Gut Health
            </StyledMenuItems>
            <StyledMenuItems
                to={'/about/my-story'}
                onClick={() => {
                    GAEvent('My Story')
                }}
            >
                My Story
            </StyledMenuItems>
            <StyledMenuItems
                to={'/about/contact'}
                onClick={() => {
                    GAEvent('Contact')
                }}
            >
                Contact
            </StyledMenuItems>
            <StyledMenuItems
                to={'/about/support'}
                onClick={() => {
                    GAEvent('Support')
                }}
            >
                Support
            </StyledMenuItems>
        </StyledAboutMenu>
    )
}
