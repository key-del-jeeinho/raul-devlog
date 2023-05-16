import Background from "@/components/atoms/Background";
import DraggableBouncingImage from "@/components/molecules/DraggableBouncingImage";
import NavBar, { NAV_BAR_HEIGHT_PX, NavBarSpace } from "@/components/organisms/NavBar";
import SideBar from "@/components/organisms/SideBar";
import plant001 from "../../../public/images/img_plant-001.png"
import plant002 from "../../../public/images/img_plant-002.png"
import plant003 from "../../../public/images/img_plant-003.png"
import plant004 from "../../../public/images/img_plant-004.png"
import plant005 from "../../../public/images/img_plant-005.png"
import plant007 from "../../../public/images/img_plant-007.png"
import toggleDarkModeCommentImage from "../../../public/images/img_toggle-dark-mode-comment.png"
import DraggableBouncingLabel from "@/components/molecules/DraggableBouncingLabel";
import CircularText from "@/components/atoms/CircularText";
import DraggableComponent from "@/components/molecules/DraggableComponent";
import Title from "@/components/atoms/Title";
import SubTitle from "@/components/atoms/SubTitle";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import Label from "@/components/atoms/Label";
import styled, { DefaultTheme, useTheme } from "styled-components";
import Icon from "@/components/atoms/Icon";
import Link from "next/link";
import BouncingLabel from "@/components/molecules/BouncingLabel";
import useBlogTheme from "@/hooks/useBlogTheme";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

const TemplateStyleClassDefinition = styled.div`
    .content-container {
        position: relative;
        align-items: center;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100vw;
        height: calc(100vh - ${NAV_BAR_HEIGHT_PX}px - 4px);
    }
`

function Canvas({theme}: {theme: DefaultTheme}) {
    const isMobile = useIsMobile()
    const [blogTheme] = useBlogTheme()
    const circularTextColor = theme.colors.text_fill__background_circular_text
    const circularTextFontFamilly = theme.font_families.background_circular_text
    return (<>
        <div className="absolute top-50vh left-50vw">
                <span className="absolute z-1 translate-x--195% translate-y--130%">
                    <DraggableBouncingImage src={plant002} alt={'화분에 꽂혀있는 난초 그림'} width={193} isFixed={true} fadeIn={true} />
                </span>
                <span className="absolute z-2 translate-x--230% translate-y--30%">
                    <DraggableBouncingImage src={blogTheme == 'light' ? plant001 : plant007} alt={'네모난 유리화분 안에서 성장중인 식물 사진'} width={184} isFixed={true} fadeIn={true} />
                </span>
                <span className="absolute z-3 translate-x--145% translate-y--105%">
                    <DraggableBouncingImage src={plant003} alt={'배경이 없는 성장중인 이파리들'} width={224} isFixed={true} fadeIn={true} />
                </span>
                <span className="absolute z-4 translate-x-130% translate-y--100%">
                    <DraggableBouncingImage src={plant004} alt={'흰 배경의 성장하는 식물 그림'} width={121} isFixed={true} fadeIn={true} />
                </span>
                <span className="absolute z-5 translate-x-135% translate-y--75%">
                    <DraggableBouncingImage src={plant005} alt={'배경이 없는 성장하는 야자수 사진'} width={158} isFixed={true} fadeIn={true} />
                </span>
                <span className="absolute z-6 translate-x--450% translate-y--705%">
                    <BouncingLabel style="monotone" size="regular">SERVER</BouncingLabel>
                </span>
                <span className="absolute z-7 translate-x--300% translate-y-270%">
                    <DraggableBouncingLabel style="frame" size="regular" isFixed={true}>Blog</DraggableBouncingLabel>
                </span>
                <span className="absolute z-8 translate-x-350% translate-y--460%">
                    <BouncingLabel style="texture" size="regular">Growth</BouncingLabel>
                </span>
                <span className="absolute z-1 translate-x-7% translate-y--70%">
                    <DraggableComponent isFixed={true}>
                        <CircularText radius={230} text='HI! I AM A JUNIOR SERVER ENGINEER. I MAINLY USE KOTLIN AND SPRING' textBy='inside'
                                      fontColor={circularTextColor} fontSize='32px' fontWeight='bold' fontFamilly={circularTextFontFamilly}/>
                    </DraggableComponent>
                </span>
            </div>
            <div className="absolute bottom-0vh left-0vw">
                {!isMobile ? <Image src={toggleDarkModeCommentImage} width={86} alt="다크모드 토글 안내 말풍선" className="absolute translate-x-200% translate-y--230%"/> : <></>}
            </div>
        </>)
}

interface Prop {
    title: {
        text: string,
    },
    subTitle: {
        text: string,
    },
    newestArticle: {
        text: string,
        link: string,
    }
}

export default function Template({title, subTitle, newestArticle}: Prop) {
    const theme = useTheme()
    return (
        <TemplateStyleClassDefinition className="relative">
            <Background>
                <div className="fixed z-200"><NavBar /></div>
                <NavBarSpace/>

                <div className="fixed z-200 left-10 bottom-10"><SideBar /></div>
                
                <div className="content-container">
                    <div className="mb-30vh" />
                    <div className="z-100">
                        <SubTitle>{subTitle.text}</SubTitle>
                    </div>
                    <div className="mb-1.5vh" />
                    <div className="z-100">
                        <Title>{title.text}</Title>
                    </div>
                    <div className="mb-8vh" />
                    <div className="z-100">
                        <Link href={newestArticle.link}>
                            <PrimaryButton fadeIn={true} onClick={() => {}}>
                                {newestArticle.text}
                            </PrimaryButton>
                        </Link>
                    </div>
                    <div className="mb-20vh" />
                    <div className="z-100">
                        <Label labelStyle="colored" labelSize="regular">Scroll</Label>
                    </div>
                    <div className="mb-1vh" />
                    <Icon className="z-100" type="ic24_scroll-down" color={theme.colors.icon_fill__DEFAULT} />
                    <div className="mb-1vh" />
                </div>
                <Canvas theme={theme}/>
            </Background>
        </TemplateStyleClassDefinition>
    )
}