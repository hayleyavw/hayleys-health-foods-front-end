import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { StyledButton, StyledButtonText } from '../common/Button.styled'
import { headingFont } from '../styling/fonts'

export const StyledBuyMeASmoothieText = styled(StyledButtonText)({
    paddingRight: calcRem(15),
    fontSize: calcRem(28),
    fontFamily: headingFont,
})

export const StyledBuyMeASmoothieImage = styled('img')({
    height: calcRem(34),
    width: calcRem(35),
})

export const StyledBuyMeASmoothieLink = styled('a')({
    display: 'inline-flex',
    margin: '0 auto',
    minWidth: calcRem(217),
    lineHeight: calcRem(35),
    textDecoration: 'none',
    fontSize: calcRem(28),
    letterSpacing: calcRem(0.6),
    boxShadow: `${calcRem(0, 1, 2)} rgba(190, 190, 190, 0.5)`,
    WebkitBoxShadow: `${calcRem(0, 1, 2, 2)} rgba(190, 190, 190, 0.5)`,
})

export const StyledBuyMeASmoothieButton = StyledButton.withComponent(StyledBuyMeASmoothieLink)
