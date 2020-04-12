import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { colours } from '../styling/colours'
import { css } from '@emotion/core'

const commonStyles = css({
    margin: calcRem(2),
    padding: calcRem(6),
    borderRadius: calcRem(3),
    lineHeight: calcRem(16),
    fontSize: calcRem(16),
    backgroundColor: colours.offWhite,
    color: colours.black,
    opacity: 0.8,
    height: 'fit-content',

    '&.tag-button': {
        '&:hover': {
            opacity: 1,
            cursor: 'pointer',
        },
    },
})

export const StyledHeroTagButton = styled('button')({
    ...commonStyles,
})

export const StyledHeroTagLabel = styled('p')({
    ...commonStyles,
})
