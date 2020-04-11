import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledAllRecipesHeading = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: calcRem(12, 0),

    h2: {
        margin: calcRem(0, 0, 12),
        [breakpoint('sm')]: {
            margin: 0,
        },
    },

    [breakpoint('sm')]: {
        alignItems: 'flex-start',
    },
})

export const StyledFilterButtonsWrapper = styled('div')({
    flexBasis: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',

    'button:last-of-type': {
        marginRight: `${calcRem(0)} !important`,
    },

    [breakpoint('sm')]: {
        justifyContent: 'flex-end',
        flexBasis: '70%',
    },
})
