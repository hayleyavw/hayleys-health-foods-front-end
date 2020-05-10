import React from 'react'
import ReactGA from 'react-ga'
import { StyledButtonLink, StyledButtonLinkImage, StyledButtonLinkText } from './ButtonLink.styled'

interface ButtonLinkProps {
    href: string
    newTab?: boolean
    image: {
        src: string
        alt: string
    }
    buttonText: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, newTab, image, buttonText }) => {
    return (
        <StyledButtonLink
            target={newTab ? '_blank' : ''}
            rel={newTab ? 'noopener noreferrer' : ''}
            href={href}
            onClick={() => {
                ReactGA.event({
                    category: 'Button Click',
                    action: 'Button Click',
                    label: buttonText,
                })
            }}
        >
            <StyledButtonLinkImage src={image.src} alt={image.alt} />
            <StyledButtonLinkText>{buttonText}</StyledButtonLinkText>
        </StyledButtonLink>
    )
}
