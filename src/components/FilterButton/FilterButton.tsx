import React from 'react'
import ReactGA from 'react-ga'
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
                ReactGA.event({
                    category: 'Filters',
                    action: 'All Recipes Click',
                    label: tag.name,
                })
            }}
            className={classText ? classText : ''}
            selected={selected}
        >
            <StyledFilterButtonText>{tag.name}</StyledFilterButtonText>
        </StyledFilterButton>
    )
}
