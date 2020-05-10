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

interface StyledButtonLinkRowWrapperProps {
    hasHeading?: boolean
}

export const StyledButtonLinkRowWrapper = styled('div')<StyledButtonLinkRowWrapperProps>(
    ({ hasHeading }) => ({
        margin: `${calcRem(20)} -${margins.bodyLeftRightMargin.sm} ${calcRem(12)} -${
            margins.bodyLeftRightMargin.sm
        }`,
        padding: calcRem(hasHeading ? 4 : 8, 8, 8, 8),
        backgroundColor: colours.offWhite,
        textAlign: 'center',

        [breakpoint('md')]: {
            padding: calcRem(hasHeading ? 4 : 48, 48, 48, 48),
            height: undefined,
        },
    })
)

export const StyledButtonLinkRow = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',

    [breakpoint('md')]: {
        flexWrap: 'nowrap',
    },
})

export const StyledButtonLinkRowButtonLink = styled(StyledButtonLink)({
    width: '100%',
    margin: calcRem(5),
})

export const StyledButtonLinkRowButtonLinkImage = styled(StyledButtonLinkImage)({})

export const StyledButtonLinkRowButtonLinkText = styled(StyledButtonLinkText)({})
