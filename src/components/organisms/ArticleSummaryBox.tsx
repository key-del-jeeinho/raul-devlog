import { ArticleMetadata } from "@/interfaces/ArticleData"
import styled, { useTheme } from "styled-components"
import Icon from "../atoms/Icon"
import { Children, ReactNode } from "react"

const ArticleSummaryBoxStyle = styled.div`
    width: 540px;
    padding-left: 4rem;
    padding-top: 20px;
    padding-bottom: 20px;

    background-color: ${({theme}) => theme.colors.box_fill__article_summary_box};

    border-radius: 10px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.box_outline__article_summary_box};
    border-style: solid;

    color: ${({theme}) => theme.colors.text_fill__article_summary_box};
`

interface Prop {
    articleMetadata: ArticleMetadata
}

export default function ArticleSummaryBox({articleMetadata}: Prop) {
    return (
        <ArticleSummaryBoxStyle>
            <ArticleSummaryBox.Title>
                {articleMetadata.title}
            </ArticleSummaryBox.Title>
            <div className="mb-1rem"/>
            <ArticleSummaryBox.Subtitle>
                {articleMetadata.subtitle}
            </ArticleSummaryBox.Subtitle>
            <div className="mb-1rem"/>
            <ArticleSummaryBox.Description>
                {articleMetadata.createAt}
                <span className="font-black">·</span>
                {tagsToString(articleMetadata.tags)}
            </ArticleSummaryBox.Description>
        </ArticleSummaryBoxStyle>
    )
}

interface ChildrenProp {
    children: ReactNode
}

ArticleSummaryBox.Title = function ArticleSummaryBoxTitle({children}: ChildrenProp) {
    return (<span className="text-2.4rem font-bold">{children}</span>)
}

ArticleSummaryBox.Subtitle = function ArticleSummaryBoxSubtitle({children}: ChildrenProp) {
    return (<span className="text-1.6rem font-regular">{children}</span>)
}

ArticleSummaryBox.Description = function ArticleSummaryBoxDescription({children}: ChildrenProp) {
    const theme = useTheme()
    const descriptionColor = theme.colors.text_fill__article_summary_box_description
    const elements = Children.map(children, (element =>
        <span className="pl-0.3rem">{element}</span>
    ))
    return (<span
                className="text-1.4rem flex flex-row items-center font-light"
                style={{color: descriptionColor}}
            >{elements}
            </span>)
}

function tagsToString(tags: string[]): String {
    return tags.map(value => `#${value}`).join(" ")
}