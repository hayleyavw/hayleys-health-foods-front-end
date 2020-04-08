import React from 'react'
import { StyledLoadingAnimation, StyledLoadingWrapper } from './Loading.styled'
import { StyledHeadingOne } from '../common/Headings.styled'

const Loading: React.FC = () => {
    return (
        <StyledLoadingWrapper>
            <StyledHeadingOne>Loading...</StyledHeadingOne>
            <StyledLoadingAnimation>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </StyledLoadingAnimation>
        </StyledLoadingWrapper>
    )
}

export default Loading
