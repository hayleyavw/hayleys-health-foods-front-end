import styled from '@emotion/styled'
import { colours } from '../styling/colours'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledRecipeSteps = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: calcRem(0),
    position: 'relative',
    color: colours.black,
    fontSize: calcRem(11),

    [breakpoint('sm')]: {
        flexWrap: 'wrap',
        margin: calcRem(0, 32),
    },

    [breakpoint('md')]: {
        margin: calcRem(0, 96),
        fontSize: calcRem(16),
    },

    [breakpoint('lg')]: {
        margin: calcRem(0, 128),
    },
})
