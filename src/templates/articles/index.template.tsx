import Background from "@/components/atoms/Background";
import SecondarySubTitle from "@/components/atoms/SecondarySubTitle";
import SecondaryTitle from "@/components/atoms/SecondaryTitle";
import plant001 from "@/../public/images/img_plant-001.png"
import plant002 from "@/../public/images/img_plant-002.png"
import plant003 from "@/../public/images/img_plant-003.png"
import plant004 from "@/../public/images/img_plant-004.png"
import plant005 from "@/../public/images/img_plant-005.png"
import plant007 from "@/../public/images/img_plant-007.png"
import DraggableBouncingImage from "@/components/molecules/DraggableBouncingImage";
import ToggleThemeComment from "@/components/molecules/ToggleThemeComment";
import ArticleSummaryBox from "@/components/organisms/ArticleSummaryBox";
import NavBar, { NavBarSpace } from "@/components/organisms/NavBar";
import SideBar from "@/components/organisms/SideBar";
import useBlogTheme from "@/hooks/useBlogTheme";
import ArticleData from "@/interfaces/ArticleData";
import { DefaultTheme, useTheme } from "styled-components";
import BouncingLabel from "@/components/molecules/BouncingLabel";

function Canvas({theme}: {theme: DefaultTheme}) {
    const [blogTheme] = useBlogTheme()
    return (<>
        <div className="absolute top-50vh left-50vw">
            <span className="absolute z-1 translate-x--320% translate-y--50%">
                <DraggableBouncingImage src={blogTheme == 'light' ? plant001 : plant007} alt='네모난 유리화분 안에서 성장중인 식물 사진' width={184} isFixed fadeIn />
            </span>
            <span className="absolute z-2 translate-x-400% translate-y-100%">
                <DraggableBouncingImage src={plant004} alt={'흰 배경의 성장하는 식물 그림'} width={121} isFixed fadeIn/>
            </span>
            <span className="absolute z-8 translate-x--670% translate-y--670%">
                <BouncingLabel style="monotone" size="regular">SERVER</BouncingLabel>
            </span>
            <span className="absolute z-8 translate-x--630% translate-y--230%">
                <BouncingLabel style="texture" size="regular">TDD</BouncingLabel>
            </span>
            <span className="absolute z-8 translate-x--410% translate-y-650%">
                <BouncingLabel style="frame" size="regular">SpringBoot</BouncingLabel>
            </span>
            <span className="absolute z-8 translate-x-470% translate-y--100%">
                <BouncingLabel style="frame" size="regular">Insights</BouncingLabel>
            </span>
            <span className="absolute z-8 translate-x-200% translate-y-1000%">
                <BouncingLabel style="monotone" size="regular">테스트_주도_개발</BouncingLabel>
            </span>
        </div>
    </>)
}

interface Prop {
    articles: ArticleData[],
}

export default function Template({articles}: Prop) {
    const theme = useTheme()
    const articleSummaries = articles.map(article => 
        (<div key={article.identifier} className="mb-5rem">
            <ArticleSummaryBox article = {article}/>
        </div>)
    )
    return (
        <Background>
            <div className="fixed z-200"><NavBar /></div>
            <NavBarSpace/>
            
            <div className="fixed z-200 left-10 bottom-10"><SideBar /></div>
            <ToggleThemeComment/>

            <div className="flex flex-col items-center w-100vw">
                <div className="mb-5rem"/>
                <SecondaryTitle>Dev.post</SecondaryTitle>
                <div className="mb-2rem"/>
                <SecondarySubTitle>최신 글 모아보기</SecondarySubTitle>
                <div className="mb-5rem"/>
                {articleSummaries}
            </div>
            <Canvas theme={theme}/> {/*나중에 해상도가 PC이상일경우에만 적용되도록 수정 */}
        </Background>
    )
}