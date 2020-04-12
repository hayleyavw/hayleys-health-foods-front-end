import React from 'react'
import { StyledHeroTagButton, StyledHeroTagLabel } from './Tag.styled'
import { TagObject } from '../../api/recipes/ResponseShapes'

interface TagProps {
    tag: TagObject
    text: string
    classText?: string
    handler?: (reset: boolean, tag: string, scroll: boolean) => void
}

export const Tag: React.FC<TagProps> = ({ text, classText, handler, tag }) => {
    return handler ? (
        <StyledHeroTagButton
            onClick={() => {
                handler(true, tag.shortName, true)
            }}
            className={classText ? `${classText} tag-button` : 'tag-button'}
        >
            {text}
        </StyledHeroTagButton>
    ) : (
        <StyledHeroTagLabel className={classText ? classText : ''}>{text}</StyledHeroTagLabel>
    )
}
