import Background from "@/components/atoms/Background";
import DraggableBouncingImage from "@/components/molecules/DraggableBouncingImage";
import NavBar, { NAV_BAR_HEIGHT_PX } from "@/components/organisms/NavBar";
import SideBar from "@/components/organisms/SideBar";
import plant001 from "../../../public/images/img_plant-001.png"
import plant002 from "../../../public/images/img_plant-002.png"
import plant003 from "../../../public/images/img_plant-003.png"
import plant004 from "../../../public/images/img_plant-004.png"
import plant005 from "../../../public/images/img_plant-005.png"
import plant006 from "../../../public/images/img_plant-006.png"
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

const TemplateStyle = styled.div`
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

            
            <div style={{zIndex: 2}}><DraggableBouncingImage 
                src={plant001}
                alt={'test'}
                width={184}
                isFixed={false}
                fadeIn={true}
            /></div>
            <div style={{zIndex: 1}}><DraggableBouncingImage 
                src={plant002}
                alt={'test'}
                width={193}
                isFixed={false}
                fadeIn={true}
            /></div>

            <div style={{zIndex: 3}}><DraggableBouncingImage 
                src={plant003}
                alt={'test'}
                width={224}
                isFixed={false}
                fadeIn={true}
            /></div>
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

            
            <div>
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
            </div>

            <DraggableBouncingImage 
                src={plant004}
                alt={'test'}
                width={121}
                isFixed={false}
                fadeIn={true}
            />
            <DraggableBouncingImage 
                src={plant005}
                alt={'test'}
                width={158}
                isFixed={false}
                fadeIn={true}
            />
            <DraggableBouncingLabel
                style="texture"
                size="regular"
                isFixed={false}
            >Growth</DraggableBouncingLabel>

        </Background>
        </TemplateStyle>
    )
}