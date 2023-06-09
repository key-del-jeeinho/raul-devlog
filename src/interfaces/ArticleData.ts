export default interface ArticleData {
    identifier: string,
    metadata: ArticleMetadata,
    content: ArticleContent,
}

export interface ArticleMetadata {
    title: string,
    subtitle: string,
    tags: string[],
    createAt: string,
}

export interface ArticleContent {
    content: string, //TODO
}