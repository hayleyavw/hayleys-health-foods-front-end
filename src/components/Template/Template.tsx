import React from 'react'
import { StyledComponent } from './Template.styled'

interface Props {
    prop?: undefined
}

export const Template: React.FC<Props> = ({ prop }) => {
    return <StyledComponent />
}
