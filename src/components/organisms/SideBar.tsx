import styled from "styled-components"
import ButtonList from "../molecules/ButtonList"
import { useRouter } from "next/router"
import useBlogTheme from "../../hooks/useBlogTheme"
import Image from "next/image"
import flower_001 from "../../../public/images/img_flower-001.png"

const SidbarBox = styled.div`
    width: 70px;
    height: 400px;
    background-image: url(${({theme}) => theme.images.box_texture__side_bar});
    display: flex;
    column-gap: 10px;
    flex-direction: column-reverse;

    > * {
        display: flex;
        flex-direction: column;
        column-gap: 10px;
    }
`

interface Props {
    
}

export default function SideBar({}: Props) {
  const router = useRouter()
  const [_theme, _setTheme, toggleTheme] = useBlogTheme()
  const data = {
    subscribe: { content: "구독하기", onClick: () => {router.push('/subscribe')} },
    guestBook: { content: "방명록 작성", onClick: () => {router.push('/guest-book')}},
    theme: { content: <Image src={flower_001} alt="테마 토글(다크모드로)" height={17}/>, onClick: toggleTheme },
  }
  return (<>
      <SidbarBox>
        <div style={{
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
        }}>
          <ButtonList fixed={true} fadeIn={true}>
            <ButtonList.Button onClick= {data.subscribe.onClick}>
              {data.subscribe.content}
            </ButtonList.Button>
            <ButtonList.Button onClick= {data.guestBook.onClick}>
              {data.guestBook.content}
            </ButtonList.Button>
            <ButtonList.ThemeButton/>
            <div style={{paddingTop: '30px'}}/>
          </ButtonList>
        </div>
      </SidbarBox>
    </>)
}