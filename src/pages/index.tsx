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

export default function Home() {
  return (
    <>
      <BouncingImage src={plant001} alt={'test'} width={300}/>
      <DraggableBouncingImage src={plant002} alt={'test'} width={300} isFixed={false}/>
      <DraggableBouncingImage src={plant003} alt={'test'} width={200} isFixed={true}/>
      <Label style='colored' size='regular'>Blog</Label>
      <Label style='frame' size='regular'>Blog</Label>
      <BouncingLabel style='texture' size='regular'>Blog</BouncingLabel>
      <DraggableBouncingLabel style='monotone' size='regular' isFixed={true}>Blog</DraggableBouncingLabel>
      <DraggableBouncingLabel style='frame' size='regular' isFixed={false}>FREEDOM</DraggableBouncingLabel>
      <Title>나무에 물 주듯</Title>
      <SubTitle>Raul.devlog</SubTitle>
      <PrimaryButton onClick={() => console.log("clicked!")}>Click Me!</PrimaryButton>
      <div></div>
      <Button onClick={() => console.log("clicked!")}>First Option</Button>
      <div></div>
      <Button onClick={() => console.log("clicked!")}>Second Option</Button>
      <div></div>
      <Button onClick={() => console.log("clicked!")} visibleOverflowedShadow={true}>Third Option</Button>
      <div></div>
      <Icon type='ic32_menu' color='#000000' />
    </>
  )
}
