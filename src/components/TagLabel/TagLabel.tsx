import React from 'react'
import { StyledTagLabel } from './TagLabel.styled'

interface TagProps {
    text: string
    classText?: string
}

export const TagLabel: React.FC<TagProps> = ({ text, classText }) => {
    return <StyledTagLabel className={classText ? classText : ''}>{text}</StyledTagLabel>
}
