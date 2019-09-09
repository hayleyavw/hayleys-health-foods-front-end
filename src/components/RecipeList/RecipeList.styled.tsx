import styled from '@emotion/styled'

export const StyledRecipeList = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
})

export const StyledLargeLeftCard = styled('div')({
    height: '100%',
    flexBasis: '50%',
})

export const StyledRightColumnCards = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '50%',
})

export const StyledRightColumnCard = styled('div')({
    display: 'flex',
})

export const StyledRightColumnCardText = styled('div')({
    flexBasis: '50%',
})
