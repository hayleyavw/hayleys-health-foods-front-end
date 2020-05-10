import styled from '@emotion/styled'
import { calcRem } from '../../styling/styling-utils/calcRem'
import { breakpoint } from '../../styling/styling-utils/breakpoints'
import {
    StyledButtonLink,
    StyledButtonLinkImage,
    StyledButtonLinkText,
} from '../../ButtonLink/ButtonLink.styled'
import { colours } from '../../styling/colours'

export const StyledRecipeList = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: calcRem(10),

    [breakpoint('md')]: {
        gridTemplateColumns: '1fr 1fr 1fr',
    },

    [breakpoint('lg')]: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
})

export const StyledRecipeListWrapper = styled('div')({})

export const StyledRecipeListButtonLink = styled(StyledButtonLink)({
    display: 'flex',
    flexDirection: 'column',
    width: 'auto !important',

    '&:hover': {
        '.recipe-list-view-all-image-wrapper': {
            border: `${calcRem(3)} solid ${colours.primary.primary}`,
        },
    },
})

export const StyledButtonLinkImageWrapper = styled('div')({
    height: calcRem(70),
    width: calcRem(70),
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.white,
})

export const StyledRecipeListButtonLinkImage = styled(StyledButtonLinkImage)({})

export const StyledRecipeListButtonLinkText = styled(StyledButtonLinkText)({})
