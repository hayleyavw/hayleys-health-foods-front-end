import React from 'react'
import { StyledTagButton } from './TagButton.styled'

interface TagProps {
    text: string
    classText?: string
}

export const TagButton: React.FC<TagProps> = ({ text, classText }) => {
    return <StyledTagButton className={classText ? classText : ''}>{text}</StyledTagButton>
}
