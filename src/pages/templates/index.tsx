import Background from "@/components/atoms/Background";
import DraggableBouncingImage from "@/components/molecules/DraggableBouncingImage";
import NavBar, { NAV_BAR_HEIGHT_PX } from "@/components/organisms/NavBar";
import SideBar from "@/components/organisms/SideBar";
import plant001 from "../../../public/images/img_plant-001.png"
import plant002 from "../../../public/images/img_plant-002.png"
import plant003 from "../../../public/images/img_plant-003.png"
import plant004 from "../../../public/images/img_plant-004.png"
import plant005 from "../../../public/images/img_plant-005.png"
import DraggableBouncingLabel from "@/components/molecules/DraggableBouncingLabel";
import CircularText from "@/components/atoms/CircularText";
import DraggableComponent from "@/components/molecules/DraggableComponent";
import Title from "@/components/atoms/Title";
import SubTitle from "@/components/atoms/SubTitle";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import Label from "@/components/atoms/Label";
import styled, { useTheme } from "styled-components";
import Icon from "@/components/atoms/Icon";
import Link from "next/link";
import { ReactNode } from "react";

const TemplateStyle = styled.div`
    position: relative;
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

    .relative {
        position: relative;
    }
    .absolute {
        position: absolute;
    }
    .absolute-center {
        position: absolute;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
    }

    .z-index-100 {
        position: relative;
        z-index: 100;
    }

    .z-index-200 {
        position: relative;
        z-index: 200;
    }
    .aligin-center {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`

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

function Layer({children}: {children: ReactNode}) {
    return (<div style={{position: "relative"}}>
                <div style={{position: "absolute"}}>{children}</div>
            </div>)
}

function LayerCenter({children}: {children: ReactNode}) {
    return (<div style={{
                position: "absolute",
                top: "50vh",
                left: "50vw",
                transform: "translate(-50%, -50%)",
            }}>{children}</div>)
}

export default function Template({title, subTitle, newestArticle}: Prop) {
    const theme = useTheme()
    return (
        <TemplateStyle>
            <Background>
                <div className="z-index-200"><SideBar /></div>
                <div className="z-index-200"><NavBar /></div>
                <div className="content-container">
                    <div style={{marginBottom: "25vh"}} />
                    <div className="z-index-100">
                        <div className="aligin-center">
                            <SubTitle>{subTitle.text}</SubTitle>
                        </div>
                    </div>
                    <div style={{marginBottom: "1.5vh"}}/>
                    <div className="z-index-100 aligin-center">
                        <Title>{title.text}</Title>
                    </div>
                    <div style={{marginBottom: "8vh"}} />
                    <div className="z-index-100 aligin-center">
                        <Link href={newestArticle.link}>
                            <PrimaryButton fadeIn={true} onClick={() => {}}>
                                {newestArticle.text}
                            </PrimaryButton>
                        </Link>
                    </div>
                    <div style={{marginBottom: "25vh"}} />
                    <div className="z-index-100 aligin-center">
                        <Label
                            labelStyle="colored"
                            labelSize="regular"
                        >Scroll</Label>
                    </div>
                    <div style={{marginBottom: "1vh"}} />
                    <Icon className="z-index-100" type="ic24_scroll-down" color="#000000"/>
                    <div style={{marginBottom: "1vh"}} />
                </div>

                <LayerCenter>
                    <span style={{zIndex: 2, transform: "translate(-230%, -55%)"}} className="absolute">
                        <DraggableBouncingImage 
                            src={plant001}
                            alt={'네모난 유리화분 안에서 성장중인 식물 사진'}
                            width={184}
                            isFixed={true}
                            fadeIn={true}
                        />
                    </span>
                    <span style={{zIndex: 1, transform: "translate(-195%, -155%)"}} className="absolute">
                        <DraggableBouncingImage 
                            src={plant002}
                            alt={'화분에 꽂혀있는 난초 그림'}
                            width={193}
                            isFixed={true}
                            fadeIn={true}
                        />
                    </span>

                    <span style={{zIndex: 3, transform: "translate(-145%, -130%)"}} className="absolute">
                        <DraggableBouncingImage 
                            src={plant003}
                            alt={'배경이 없는 성장중인 이파리들'}
                            width={224}
                            isFixed={true}
                            fadeIn={true}
                        />
                    </span>

                    <span style={{zIndex: 3, transform: "translate(130%, -125%)"}} className="absolute">
                        <DraggableBouncingImage 
                            src={plant004}
                            alt={'흰 배경의 성장하는 식물 그림'}
                            width={121}
                            isFixed={true}
                            fadeIn={true}
                        />
                    </span>
                    <span style={{zIndex: 3, transform: "translate(135%, -100%)"}} className="absolute">
                        <DraggableBouncingImage 
                            src={plant005}
                            alt={'배경이 없는 성장하는 야자수 사진'}
                            width={158}
                            isFixed={true}
                            fadeIn={true}
                        />
                    </span>
                </LayerCenter>

                <DraggableBouncingLabel
                    style="monotone"
                    size="regular"
                    isFixed={false}
                >SERVER</DraggableBouncingLabel>

                <DraggableBouncingLabel
                    style="frame"
                    size="regular"
                    isFixed={false}
                >Blog</DraggableBouncingLabel>

                
                <span>
                    <DraggableComponent isFixed={false}>
                        <CircularText
                            radius={210} 
                            text='HI! I AM A JUNIOR SERVER ENGINEER. I MAINLY USE KOTLIN AND SPRING'
                            textBy='inside'
                            fontColor={theme.colors.text_fill__background_circular_text}
                            fontSize='32px'
                            fontWeight='bold'
                        />
                    </DraggableComponent>
                </span>
                <DraggableBouncingLabel
                    style="texture"
                    size="regular"
                    isFixed={false}
                >Growth</DraggableBouncingLabel>

            </Background>
        </TemplateStyle>
    )
}