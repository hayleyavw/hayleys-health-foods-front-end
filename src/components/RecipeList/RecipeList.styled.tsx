import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { StyledHeadingFour } from '../common/Headings.styled'

interface StyledLatestRecipeImageLinkProps {
    isMainCard?: boolean
}

export const StyledRecipeList = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '60vh',
})

export const StyledFeatureRecipeCard = styled('div')({
    flexBasis: '49%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: calcRem(5),
})

export const StyledLatestRecipeCardHeadings = styled(StyledHeadingFour)({
    margin: calcRem(3, 0, 0, 0),
})

export const StyledLatestRecipeCardsColumn = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '49%',
    justifyContent: 'space-between',
    height: '100%',
})

export const StyledLatestRecipeCard = styled('div')({
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

export const StyledLatestRecipeDescription = styled('p')({
    margin: calcRem(5, 0, 5, 0),
    fontWeight: 300,
    fontSize: calcRem(14),
})

export const StyledLatestRecipeImageLink = styled(Link)<StyledLatestRecipeImageLinkProps>(
    ({ isMainCard }) => ({
        width: isMainCard ? '100%' : '60%',
        height: isMainCard ? '65%' : '100%',
        marginBottom: isMainCard ? calcRem(5) : undefined,
    })
)

export const StyledLatestRecipeCardText = styled('div')({
    flexBasis: '50%',
    marginLeft: calcRem(5),
})
