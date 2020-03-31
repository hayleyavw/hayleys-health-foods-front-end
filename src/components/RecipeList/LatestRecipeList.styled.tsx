import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { StyledHeadingFour } from '../common/Headings.styled'
import { breakpoint } from '../styling/styling-utils/breakpoints'

interface StyledLatestRecipeImageLinkProps {
    isFeaturedRecipeCard?: boolean
}

interface StyledLatestRecipeDescriptionProps {
    isFeaturedRecipeCard?: boolean
}

export const StyledLatestRecipeList = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    [breakpoint('sm')]: {
        height: '60vh',
    },
})

export const StyledFeatureRecipeCard = styled('div')({
    display: 'flex',
    height: '100%',
    margin: calcRem(5),
    flexBasis: '100%',
    flexDirection: 'column',

    [breakpoint('sm')]: {
        flexBasis: '48%',
    },
})

export const StyledLatestRecipeCardHeadings = styled(StyledHeadingFour)({
    margin: calcRem(3, 0, 0, 0),
})

export const StyledLatestRecipeCardsColumn = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    [breakpoint('sm')]: {
        height: '100%',
        flexBasis: '49%',
        flexDirection: 'column',
    },
})

export const StyledLatestRecipeCard = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: calcRem(5),
    flexBasis: '32%',

    [breakpoint('sm')]: {
        flexDirection: 'row',
        height: '32%',
    },
})

export const StyledLatestRecipeImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: '0.5s',
})

export const StyledLatestRecipeDescription = styled('p')<StyledLatestRecipeDescriptionProps>(
    ({ isFeaturedRecipeCard }) => ({
        display: isFeaturedRecipeCard ? undefined : 'none',
        margin: calcRem(5, 0, 5, 0),
        fontWeight: 300,
        fontSize: calcRem(14),

        [breakpoint('sm')]: {
            display: 'block',
        },
    })
)

export const StyledLatestRecipeImageLink = styled(Link)<StyledLatestRecipeImageLinkProps>(
    ({ isFeaturedRecipeCard }) => ({
        width: '100%',
        height: isFeaturedRecipeCard ? '65%' : '80%',
        marginBottom: isFeaturedRecipeCard ? calcRem(5) : undefined,

        [breakpoint('sm')]: {
            width: isFeaturedRecipeCard ? '100%' : '60%',
            height: isFeaturedRecipeCard ? '65%' : '100%',
        },
    })
)

export const StyledLatestRecipeCardText = styled('div')({
    [breakpoint('sm')]: {
        flexBasis: '50%',
        display: 'block',
        marginLeft: calcRem(5),
    },
})
