import styled from '@emotion/styled'
import { gradients } from '../styling/gradients'
import { colours } from '../styling/colours'
import { margins } from '../styling/margin'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { StyledAnchor } from '../common/Anchor.styled'
import { Link } from 'react-router-dom'
import { bodyFont } from '../styling/fonts'

export const StyledNav = styled('nav')({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: gradients.primary_to_accent,
    margin: `0 -${margins.leftAndRightMargins}`,
    height: '2.5rem',
    paddingRight: margins.leftAndRightMargins,
})

export const StyledNavItem = styled(Link)({
    color: colours.white,
    fontSize: '1.2rem',
    margin: `0 ${calcRem(10)}`,
    fontFamily: bodyFont,
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
})
