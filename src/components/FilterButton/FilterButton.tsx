import React from 'react'
import { TagObject } from '../../api/recipes/ResponseShapes'
import { StyledFilterButton, StyledFilterButtonText } from './FilterButton.styled'

interface TagProps {
    tag: TagObject
    classText?: string
    selected: boolean
    handler: (reset: boolean, tag: string, scroll: boolean) => void
}

export const FilterButton: React.FC<TagProps> = ({ tag, classText, selected, handler }) => {
    return (
        <StyledFilterButton
            onClick={() => {
                handler(false, tag.shortName, false)
            }}
            className={classText ? classText : ''}
            selected={selected}
        >
            <StyledFilterButtonText>{tag.name}</StyledFilterButtonText>
        </StyledFilterButton>
    )
}
