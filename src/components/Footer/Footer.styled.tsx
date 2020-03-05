import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { StyledMiniLogo } from '../common/Headings.styled'
import { StyledNav, StyledNavItem, StyledNavLogo, StyledNavColumn } from '../Nav/Nav.styled'
import { calcRem } from '../styling/styling-utils/calc-rem'

export const StyledFooterFooter = styled('footer')({
    height: undefined,
})

export const StyledFooterItemLink = styled(Link)({
    fontSize: `${calcRem(16)} !important`,
})

export const StyledFooterLogoMiniLogo = styled(StyledMiniLogo)({
    display: undefined,
})

export const StyledFooterColumnDiv = styled('div')({})

export const StyledFooter = StyledNav.withComponent(StyledFooterFooter)
export const StyledFooterItem = StyledNavItem.withComponent(StyledFooterItemLink)
export const StyledFooterLogo = StyledNavLogo.withComponent(StyledFooterLogoMiniLogo)
export const StyledFooterColumn = StyledNavColumn.withComponent(StyledFooterColumnDiv)
