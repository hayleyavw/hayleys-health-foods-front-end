import React from 'react'
import { TagObject } from '../../api/recipes/ResponseShapes'
import { StyledFilterButton, StyledFilterButtonText } from './FilterButton.styled'

interface TagProps {
    tag: TagObject
    classText?: string
    selected: boolean
    handler: (tag: string) => void
}

export const FilterButton: React.FC<TagProps> = ({ tag, classText, selected, handler }) => {
    return (
        <StyledFilterButton
            onClick={() => {
                handler(tag.shortName)
            }}
            className={classText ? classText : ''}
            selected={selected}
        >
            <StyledFilterButtonText>{tag.name}</StyledFilterButtonText>
        </StyledFilterButton>
    )
}
