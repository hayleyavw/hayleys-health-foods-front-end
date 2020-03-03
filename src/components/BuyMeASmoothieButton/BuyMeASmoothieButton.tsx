import React from 'react'
import {
    StyledBuyMeASmoothieButton,
    StyledBuyMeASmoothieAnchor,
    StyledBuyMeASmoothieImage,
    StyledBuyMeASmoothieSpan,
} from './StyledBuyMeASmoothieButton.styled'

interface Props {
    prop?: undefined
}

export const BuyMeASmoothieButton: React.FC<Props> = ({ prop }) => {
    return (
        <StyledBuyMeASmoothieButton>
            <StyledBuyMeASmoothieAnchor
                target="_blank"
                href="https://www.buymeacoffee.com/healthfoods"
            >
                <StyledBuyMeASmoothieImage
                    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                    alt="Buy me a smoothie?"
                />
                <StyledBuyMeASmoothieSpan>Buy me a smoothie?</StyledBuyMeASmoothieSpan>
            </StyledBuyMeASmoothieAnchor>
        </StyledBuyMeASmoothieButton>
    )
}
