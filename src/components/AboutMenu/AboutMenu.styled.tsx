import styled from '@emotion/styled'
import { StyledAnchor } from '../common/Anchor.styled'
import { calcRem } from '../styling/styling-utils/calcRem'

export const StyledAboutMenu = styled('div')({
    margin: calcRem(20, 0),
    textAlign: 'left',
})

export const StyledMenuItems = styled(StyledAnchor)({
    margin: calcRem(0, 10),

    ':first-child': {
        marginLeft: calcRem(0),
    },
})
