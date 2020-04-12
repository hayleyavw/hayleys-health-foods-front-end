import React from 'react'
import { StyledTagButton } from './TagButton.styled'
import { TagObject } from '../../api/recipes/ResponseShapes'

interface TagProps {
    tag: TagObject
    text: string
    classText?: string
    handler: (reset: boolean, tag: string, scroll: boolean) => void
}

export const TagButton: React.FC<TagProps> = ({ text, classText, handler, tag }) => {
    return (
        <StyledTagButton
            onClick={() => {
                handler(true, tag.shortName, true)
            }}
            className={classText ? classText : ''}
        >
            {text}
        </StyledTagButton>
    )
}
