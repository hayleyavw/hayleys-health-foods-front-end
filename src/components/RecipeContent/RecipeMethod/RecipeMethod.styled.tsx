import styled from '@emotion/styled'
import { breakpoint } from '../../styling/styling-utils/breakpoints'

export const StyledRecipeMethod = styled('div')({
    flexBasis: '100%',

    [breakpoint('sm')]: {
        flexBasis: '66%',
    },
})
