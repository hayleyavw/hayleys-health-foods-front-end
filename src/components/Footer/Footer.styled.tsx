import styled from '@emotion/styled'
import { gradients } from '../styling/gradients'
import { colours } from '../styling/colours'
import { margins } from '../styling/margin'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { Link } from 'react-router-dom'
import { bodyFont, headingFont } from '../styling/fonts'
import { StyledMiniLogo } from '../common/Headings.styled'

export const StyledFooter = styled('footer')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: gradients.primary_to_accent,
    margin: `0 -${margins.bodyLeftRightMargin}`,
    padding: `${calcRem(10)} ${margins.bodyLeftRightMargin}`,
})

export const StyledFooterItem = styled(Link)({
    color: colours.white,
    fontSize: '1rem',
    margin: `0 ${calcRem(10)}`,
    fontFamily: bodyFont,
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
})

export const StyledFooterLogo = styled(StyledMiniLogo)({
    margin: `0 ${calcRem(10)}`,
})

export const StyledFooterColumn = styled('div')({
    color: colours.white,
})
