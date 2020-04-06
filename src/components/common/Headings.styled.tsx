import styled from '@emotion/styled'
import { headingFont, bodyFont } from '../styling/fonts'
import { colours } from '../styling/colours'
import { Link } from 'react-router-dom'
import { calcRem } from '../styling/styling-utils/calcRem'

export const StyledHeadingOne = styled('h1')({
    fontFamily: headingFont,
    margin: 0,
    color: colours.primary.primary,
})

export const StyledHeadingTwo = styled('h2')({
    fontFamily: headingFont,
    fontSize: calcRem(32),
    fontWeight: 'bold',
    color: colours.primary.primary,
    margin: calcRem(12, 0),
})

export const StyledHeadingThree = styled('h3')({
    fontFamily: bodyFont,
    margin: 0,
    fontWeight: 'normal',
    color: colours.white,
})

export const StyledHeadingFour = styled('h4')({
    fontFamily: bodyFont,
    color: colours.black,
})

export const StyledMiniLogo = styled(Link)({
    color: colours.white,
    fontFamily: headingFont,
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
    },
})
