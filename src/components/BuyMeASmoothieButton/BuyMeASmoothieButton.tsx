import React from 'react'
import {
    StyledBuyMeASmoothieButton,
    StyledBuyMeASmoothieImage,
    StyledBuyMeASmoothieText,
} from './StyledBuyMeASmoothieButton.styled'

interface Props {
    prop?: undefined
}

export const BuyMeASmoothieButton: React.FC<Props> = ({ prop }) => {
    return (
        <StyledBuyMeASmoothieButton target="_blank" href="https://www.buymeacoffee.com/healthfoods">
            <StyledBuyMeASmoothieImage
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy me a smoothie?"
            />
            <StyledBuyMeASmoothieText>Buy me a smoothie?</StyledBuyMeASmoothieText>
        </StyledBuyMeASmoothieButton>
    )
}
