import styled from '@emotion/styled'
import { colours } from '../styling/colours'
import { bodyFont } from '../styling/fonts'

export const StyledAnchor = styled('a')({
    fontFamily: bodyFont,
    fontSize: '1rem',
    color: colours.primary.primary,
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline',
    },
})
