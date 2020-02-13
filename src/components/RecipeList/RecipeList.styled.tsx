import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { calcRem } from '../styling/styling-utils/calc-rem'

interface StyledLatestRecipeImageLinkProps {
    isMainCard?: boolean
}

export const StyledRecipeList = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '60vh',
})

export const StyledLargeLeftCard = styled('div')({
    flexBasis: '49%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    margin: calcRem(5),
})

export const StyledRightColumnCards = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '49%',
    justifyContent: 'space-between',
    height: '100%',
})

export const StyledRightColumnCard = styled('div')({
    display: 'flex',
    height: '32%',
    margin: calcRem(5),
})

export const StyledLatestRecipeImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: '0.5s',
})

export const StyledLatestRecipeImageLink = styled(Link)<StyledLatestRecipeImageLinkProps>(
    ({ isMainCard }) => ({
        width: isMainCard ? '100%' : '60%',
        height: isMainCard ? '60%' : '100%',
    })
)

export const StyledRightColumnCardText = styled('div')({
    flexBasis: '50%',
    marginLeft: calcRem(5),
})
