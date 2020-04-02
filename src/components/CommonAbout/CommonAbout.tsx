import React, { useState, useEffect } from 'react'
import { StyledHeadingOne, StyledHeadingTwo } from '../common/Headings.styled'
import ReactMarkdown from 'react-markdown'
import { api_url } from '../../api/common'
import { AboutMenu } from '../AboutMenu/AboutMenu'
import { StyledContentBox } from '../common/ContentBox.styled'

export default function GetAboutContent(pageName: string, slug: string) {
    const [content, setContent] = useState()

    useEffect(() => {
        fetch(`${api_url}/${slug}?id=1`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                setContent(data[0]['Content'])
            })
    }, [pageName, slug])

    return (
        <StyledContentBox>
            <AboutMenu />
            <StyledHeadingOne>{pageName}</StyledHeadingOne>
            <ReactMarkdown source={content}></ReactMarkdown>
            <StyledHeadingTwo>With love,</StyledHeadingTwo>
            <StyledHeadingTwo>Hayley</StyledHeadingTwo>
        </StyledContentBox>
    )
}
