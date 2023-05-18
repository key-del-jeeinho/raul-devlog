import Background from "@/components/atoms/Background";
import ArticleSummaryBox from "@/components/organisms/ArticleSummaryBox";
import NavBar, { NavBarSpace } from "@/components/organisms/NavBar";
import SideBar from "@/components/organisms/SideBar";
import ArticleData from "@/interfaces/ArticleData";

interface Prop {
    articles: ArticleData[],
}

export default function Template({articles}: Prop) {
    return (
        <Background>
            <div className="fixed z-200"><NavBar /></div>
            <NavBarSpace/>
            Dev.post
            개발이야기

            <ArticleSummaryBox articleMetadata = {articles[0].metadata}/>
            <>
            </>
            <div className="fixed z-200 left-10 bottom-10"><SideBar /></div>
        </Background>
    )
}