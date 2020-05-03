import styled from '@emotion/styled'
import { breakpoint } from '../styling/styling-utils/breakpoints'
import { calcRem } from '../styling/styling-utils/calcRem'
import { colours } from '../styling/colours'

export const StyledRecipeContentWrapper = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: calcRem(0),
    position: 'relative',
    color: colours.black,
    fontSize: calcRem(16),

    [breakpoint('sm')]: {
        flexWrap: 'wrap',
        margin: calcRem(0, 32),
    },

    [breakpoint('md')]: {
        margin: calcRem(0, 96),
        fontSize: calcRem(18),
    },

    [breakpoint('lg')]: {
        margin: calcRem(0, 128),
    },
})
