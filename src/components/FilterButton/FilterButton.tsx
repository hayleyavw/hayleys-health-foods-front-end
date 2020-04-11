import React from 'react'
import { TagObject } from '../../api/recipes/ResponseShapes'
import { StyledFilterButton, StyledFilterButtonText } from './FilterButton.styled'

interface TagProps {
    tag: TagObject
    classText?: string
    // handler: (tags: TagObject[]) => void
}

export const FilterButton: React.FC<TagProps> = ({ tag, classText }) => {
    return (
        <StyledFilterButton
            // onClick={() => {
            //     handler([tag])
            // }}
            className={classText ? classText : ''}
        >
            <StyledFilterButtonText>{tag.name}</StyledFilterButtonText>
        </StyledFilterButton>
    )
}
