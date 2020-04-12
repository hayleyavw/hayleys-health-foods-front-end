import React from 'react'
import ReactGA from 'react-ga'
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
                ReactGA.event({
                    category: 'Filters',
                    action: 'Hero Click',
                    label: tag.name,
                })
            }}
            className={classText ? `${classText} tag-button` : 'tag-button'}
        >
            {text}
        </StyledHeroTagButton>
    ) : (
        <StyledHeroTagLabel className={classText ? classText : ''}>{text}</StyledHeroTagLabel>
    )
}
