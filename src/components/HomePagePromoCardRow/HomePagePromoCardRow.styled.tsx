import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { margins } from '../styling/margin'
import { breakpoint } from '../styling/styling-utils/breakpoints'
import {
    StyledButtonLink,
    StyledButtonLinkImage,
    StyledButtonLinkText,
} from '../ButtonLink/ButtonLink.styled'
import { colours } from '../styling/colours'

export const StyledPromoCardRow = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin: `${calcRem(20)} -${margins.bodyLeftRightMargin.sm}`,
    padding: calcRem(8),
    backgroundColor: colours.offWhite,

    [breakpoint('md')]: {
        padding: calcRem(48),
        height: undefined,
        flexWrap: 'nowrap',
    },
})

export const StyledPromoCardRowButtonLink = styled(StyledButtonLink)({
    width: '100%',
    margin: calcRem(5),
})

export const StyledPromoCardButtonLinkImage = styled(StyledButtonLinkImage)({})

export const StyledPromoCardButtonLinkText = styled(StyledButtonLinkText)({})
