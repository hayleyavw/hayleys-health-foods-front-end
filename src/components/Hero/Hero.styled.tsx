import styled from '@emotion/styled'
import { margin } from '../styling/margin';

export const StyledHero = styled('div') ({
    margin: `-${margin.bodyMargin} -${margin.bodyMargin} 0 -${margin.bodyMargin}`,
    height: '70vh'
})

export const StyledHeroImage = styled('img') ({
    height: '100%',
    width: '100%',
    objectFit: 'cover'
})