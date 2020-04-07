import styled from '@emotion/styled'
import { StyledAnchor } from '../common/Anchor.styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { breakpoint } from '../styling/styling-utils/breakpoints'
import { colours } from '../styling/colours'
import { margins } from '../styling/margin'

export const StyledAboutMenu = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: colours.offWhite,
    margin: `0 -${margins.bodyLeftRightMargin.sm} ${calcRem(20)}`,
    padding: `${calcRem(20)} ${margins.bodyLeftRightMargin.sm}`,

    'a:first-of-type': {
        marginLeft: `${calcRem(0)} !important`,
    },

    [breakpoint('sm')]: {
        display: 'block',
        textAlign: 'center',
    },
})

export const StyledMenuItems = styled(StyledAnchor)({
    flexBasis: '30%',
    margin: calcRem(5, 0),

    [breakpoint('sm')]: {
        margin: calcRem(0, 10),
    },
})
