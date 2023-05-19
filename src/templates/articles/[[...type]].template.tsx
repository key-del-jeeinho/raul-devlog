import Background from "@/components/atoms/Background";
import SecondarySubTitle from "@/components/atoms/SecondarySubTitle";
import SecondaryTitle from "@/components/atoms/SecondaryTitle";
import ToggleThemeComment from "@/components/molecules/ToggleThemeComment";
import ArticleSummaryBox from "@/components/organisms/ArticleSummaryBox";
import NavBar, { NavBarSpace } from "@/components/organisms/NavBar";
import SideBar from "@/components/organisms/SideBar";
import ArticleData from "@/interfaces/ArticleData";

interface Prop {
    articles: ArticleData[],
}

export default function Template({articles}: Prop) {
    const articleSummaries = articles.map(article => 
        (<div key={article.identifier} className="mb-5rem">
            <ArticleSummaryBox articleMetadata = {article.metadata}/>
        </div>)
    )
    return (
        <Background>
            <div className="fixed z-200"><NavBar /></div>
            <NavBarSpace/>
            
            <div className="fixed z-200 left-10 bottom-10"><SideBar /></div>
            <ToggleThemeComment/>
            
            <div className="flex flex-col items-center">
                <div className="mb-5rem"/>
                <SecondaryTitle>Dev.post</SecondaryTitle>
                <div className="mb-2rem"/>
                <SecondarySubTitle>최신 글 모아보기</SecondarySubTitle>
                <div className="mb-5rem"/>
                {articleSummaries}
            </div>
        </Background>
    )
}