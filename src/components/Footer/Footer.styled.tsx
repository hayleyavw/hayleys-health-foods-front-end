import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { StyledMiniLogo } from '../common/Headings.styled'
import { StyledNav, StyledNavItem, StyledNavLogo, StyledNavColumn } from '../Nav/Nav.styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledFooterFooter = styled('footer')({
    height: undefined,
})

export const StyledFooterItemLink = styled(Link)({})

export const StyledFooterLogoMiniLogo = styled(StyledMiniLogo)({
    display: undefined,
})

export const StyledFooterColumnDiv = styled('div')({
    fontSize: `${calcRem(12)} !important`,

    [breakpoint('sm')]: {
        fontSize: calcRem(15),
    },

    [breakpoint('md')]: {
        fontSize: calcRem(19),
    },
})

export const StyledFooter = StyledNav.withComponent(StyledFooterFooter)
export const StyledFooterItem = StyledNavItem.withComponent(StyledFooterItemLink)
export const StyledFooterLogo = StyledNavLogo.withComponent(StyledFooterLogoMiniLogo)
export const StyledFooterColumn = StyledNavColumn.withComponent(StyledFooterColumnDiv)
