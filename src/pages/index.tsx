import BouncingImage from '../components/molecules/BouncingImage'
import Label from '../components/atoms/Label'
import DraggableBouncingImage from '../components/molecules/DraggableBouncingImage'
import plant001 from '../../public/images/img_plant-001.png'
import plant002 from '../../public/images/img_plant-002.png'
import plant003 from '../../public/images/img_plant-003.png'
import DraggableBouncingLabel from '../components/molecules/DraggableBouncingLabel'
import Title from '../components/atoms/Title'
import SubTitle from '../components/atoms/SubTitle'
import PrimaryButton from '../components/atoms/PrimaryButton'
import Button from '../components/atoms/Button'
import BouncingLabel from '../components/molecules/BouncingLabel'
import Icon from '../components/atoms/Icon'
import Logo from '../components/molecules/Logo'
import CircularText from '@/components/atoms/CircularText'
import ButtonList from '@/components/molecules/ButtonList'
import Draggable from 'react-draggable'
import Image from 'next/image'
import Background from '../components/atoms/Background'
import SideBar from '../components/organisms/SideBar'

export default function Home() {
  return (
    <>
    {/* <Draggable defaultPosition={{ x: 10, y: 10 }}>
      <Image src={plant001} alt='dasd' draggable={false} />
    </Draggable>
      <BouncingImage src={plant001} alt={'test'} width={300} fadeIn={true}/>
      <DraggableBouncingImage src={plant002} alt={'test'} width={300} isFixed={false} fadeIn={true}/>
      <DraggableBouncingImage src={plant003} alt={'test'} width={200} isFixed={true} fadeIn={true}/>
      <Label labelStyle='colored' labelSize='regular'>Blog</Label>
      <Label labelStyle='frame' labelSize='regular'>Blog</Label>
      <BouncingLabel style='texture' size='regular'>Blog</BouncingLabel>
      <DraggableBouncingLabel style='monotone' size='regular' isFixed={true}>Blog</DraggableBouncingLabel>
      <DraggableBouncingLabel style='frame' size='regular' isFixed={false}>FREEDOM</DraggableBouncingLabel>
      <Title>나무에 물 주듯</Title>
      <SubTitle>Raul.devlog</SubTitle>
      <PrimaryButton onClick={() => console.log("clicked!")} fadeIn={true}>Click Me!</PrimaryButton>
      <div></div>
      <Button onClick={() => console.log("clicked!")} fadeIn={true}>First Option</Button>
      <div></div>
      <Button onClick={() => console.log("clicked!")}>Second Option</Button>
      <div></div>
      <Button onClick={() => console.log("clicked!")} visibleOverflowedShadow={true} fadeIn={true}>Third Option</Button>
      <div></div>
      <Icon type='ic32_menu' color='#000000' />
      <a href='#logo-clicked' draggable={false}><Logo/></a>
      <div></div> */}
      <Background>
        <SideBar/>
        {/* <ButtonList fadeIn={true}>
          <ButtonList.Button onClick= {() => console.log("clicked '1'")}>
            Lorem
          </ButtonList.Button>
          <ButtonList.Button onClick= {() => console.log("clicked '2'")}>
            Ipsum
          </ButtonList.Button>
          <ButtonList.Button onClick= {() => console.log("clicked '3'")}>
            Dolor
          </ButtonList.Button>
        </ButtonList> */}
        <div style={{padding: '10px 0px 10px 0px'}}>
        하늘과 산의 푸름은 바다를 닮았으나
        </div>
        <BouncingLabel style='texture' size='regular'>Lorem</BouncingLabel>
      </Background>

      {/* <div>
        <CircularText 
          radius={210} 
          text='HI! I AM A JUNIOR SERVER ENGINEER. I MAINLY USE KOTLIN AND SPRING'
          textBy='inside'
          fontColor='#e0e0e0'
          fontSize='32px'
          fontWeight='bold'
        />
      </div> */}
    </>
  )
}
