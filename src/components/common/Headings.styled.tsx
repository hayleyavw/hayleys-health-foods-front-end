import styled from '@emotion/styled'
import { headingFont } from '../styling/fonts'
import { colours } from '../styling/colours'

export const StyledHeadingOne = styled('h1')({
    fontFamily: headingFont,
    fontSize: '3rem',
    color: colours.primary.primary,
})

export const StyledHeadingTwo = styled('h2')({
    fontFamily: headingFont,
    fontSize: '2rem',
    color: colours.primary.primary,
})

export const StyledHeadingThree = styled('h3')({
    fontFamily: headingFont,
    fontSize: '1.5rem',
    color: colours.primary.primary,
})

export const StyledHeadingFour = styled('h4')({
    fontFamily: headingFont,
    fontSize: '1rem',
    color: colours.primary.primary,
})
