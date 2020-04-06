import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { StyledButton, StyledButtonText } from '../common/Button.styled'
import { headingFont } from '../styling/fonts'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledButtonLinkText = styled(StyledButtonText)({
    paddingRight: calcRem(15),
    fontFamily: headingFont,
    fontSize: calcRem(24),

    [breakpoint('md')]: {
        fontSize: calcRem(28),
    },
})

export const StyledButtonLinkImage = styled('img')({
    height: calcRem(34),
    width: calcRem(35),
})

export const StyledLink = styled('a')({
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: calcRem(35),
    textDecoration: 'none',
    letterSpacing: calcRem(0.6),
    boxShadow: `${calcRem(0, 1, 2)} rgba(190, 190, 190, 0.5)`,
    WebkitBoxShadow: `${calcRem(0, 1, 2, 2)} rgba(190, 190, 190, 0.5)`,
    alignItems: 'center',

    [breakpoint('sm')]: {
        width: calcRem(250),
        padding: calcRem(5),
    },

    [breakpoint('md')]: {
        width: calcRem(270),
        fontSize: calcRem(28),
    },
})

export const StyledButtonLink = StyledButton.withComponent(StyledLink)
