import styled from '@emotion/styled'
import { gradients } from '../styling/gradients'
import { colours } from '../styling/colours'
import { margins } from '../styling/margin'
import { calcRem } from '../styling/styling-utils/calcRem'
import { Link } from 'react-router-dom'
import { bodyFont } from '../styling/fonts'
import { StyledMiniLogo } from '../common/Headings.styled'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const NavLogo = styled(Link)({
    fontSize: calcRem(18),

    [breakpoint('sm')]: {
        fontSize: calcRem(24),
    },
})

export const StyledNavLogo = StyledMiniLogo.withComponent(NavLogo)

export const StyledNav = styled('nav')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: gradients.primary_to_accent,
    margin: `0 -${margins.bodyLeftRightMargin.sm}`,
    height: '2.5rem',
    padding: `${calcRem(3)} 0.15rem`,

    [breakpoint('sm')]: {
        padding: `${calcRem(3)} ${margins.bodyLeftRightMargin.sm}`,
    },
})

export const StyledNavItem = styled(Link)({
    color: colours.white,
    fontSize: calcRem(14),
    margin: `0 ${calcRem(5)}`,
    fontFamily: bodyFont,
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },

    [breakpoint('sm')]: {
        fontSize: calcRem(16),
    },

    [breakpoint('md')]: {
        fontSize: calcRem(19),
    },
})

export const StyledNavColumn = styled('div')({
    color: colours.white,
})
