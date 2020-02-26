import styled from '@emotion/styled'
import { colours } from '../styling/colours'
import { bodyFont } from '../styling/fonts'
import { Link } from 'react-router-dom'

export const StyledAnchor = styled(Link)({
    fontFamily: bodyFont,
    fontSize: '1rem',
    color: colours.primary.primary,
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline',
    },
})
