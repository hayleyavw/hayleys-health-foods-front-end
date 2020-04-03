import React from 'react'
import { StyledHeadingOne, StyledHeadingTwo } from '../../components/common/Headings.styled'
import { ButtonLink } from '../../components/ButtonLink/ButtonLink'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'
import { StyledContentBox } from '../../components/common/ContentBox.styled'

const SupportPage: React.FC = () => {
    return (
        <StyledContentBox>
            <AboutMenu />
            <StyledHeadingOne>Support</StyledHeadingOne>
            <StyledHeadingTwo>Help me to keep making cool things!</StyledHeadingTwo>
            <p>
                I have so many ideas for recipes to create and features to add this website, but
                unfortunately they all take time. There is also a small ongoing cost for keeping a
                website up and running, and as the site grows more popular these costs grow larger,
                so your help in covering this would be appreciated. I want to keep this website user
                friendly and informative by keeping the clutter and hassle out (e.g. ads and
                paywalls) but the only way to sustain it is with your help.
            </p>
            <p>If you like what you see and want more, let me know by buying me a smoothie :)</p>
            <ButtonLink
                href="https://www.buymeacoffee.com/healthfoods"
                image={{
                    src: 'https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg',
                    alt: 'But me a smoothie?',
                }}
                buttonText="Buy my a smoothie?"
            />

            <p>
                I know not everyone is in a position to give, so I would love your support in the
                form of a message with feedback about this site and/or a recipe idea. You can
                contact me here.
            </p>
        </StyledContentBox>
    )
}

export default SupportPage
