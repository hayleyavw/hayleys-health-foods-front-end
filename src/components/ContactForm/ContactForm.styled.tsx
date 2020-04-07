import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { colours } from '../styling/colours'
import { css } from '@emotion/core'

export const StyledForm = styled('form')({
    width: '100%',
})

export const StyledFieldset = styled('fieldset')({
    display: 'block',
    padding: calcRem(9),
    border: `${calcRem(1)} solid ${colours.primary.primary}`,
    marginBottom: calcRem(30),
    borderRadius: calcRem(5),
    '&.contact-textarea': {
        marginBottom: calcRem(25),
    },
    ' > label': {
        display: 'block',
        float: 'left',
        marginTop: calcRem(-28),
        background: colours.white,
        height: calcRem(18),
        padding: calcRem(7, 5, 7, 5),
        color: colours.primary.primary,
        fontSize: calcRem(18),
        overflow: 'hidden',
    },
})

const commonStyles = css({
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    outline: 'none',
    border: 'none',
    lineHeight: calcRem(25),
    padding: 0,
    fontSize: calcRem(18),
    fontFamily: 'monospace',
    backgroundColor: colours.offWhite,
    borderRadius: calcRem(5),
})

export const StyledLabel = styled('label')({})

export const StyledInput = styled('input')({
    ...commonStyles,
})

export const StyledTextarea = styled('textarea')({
    ...commonStyles,
    resize: 'none',
})

export const StyledButtonWrapper = styled('div')({
    width: '100%',
    textAlign: 'center',
})
