export default function Home() {
  return (
    <>
    <Background>
      <NavBar />
      <DraggableBouncingImage src={plant002} alt={'test'} width={300} isFixed={false} fadeIn={true}/>
      <BouncingImage src={plant001} alt={'test'} width={300} fadeIn={true}/>
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
      <Button onClick={() => console.log("clicked!")} fadeIn={true} fixed={false}>First Option</Button>
      <div></div>
      <Button onClick={() => console.log("clicked!")} fixed={false}>Second Option</Button>
      <div></div>
      <Button onClick={() => console.log("clicked!")} fixed={false} marginOverflowedShadow={true} fadeIn={true}>Third Option</Button>
      <div></div>
        <SideBar/>
        <ButtonList fadeIn={true} fixed={true}>
          <ButtonList.Button onClick= {() => console.log("clicked '1'")}>
            Lorem
          </ButtonList.Button>
          <ButtonList.Button onClick= {() => console.log("clicked '2'")}>
            Ipsum
          </ButtonList.Button>
          <ButtonList.Button onClick= {() => console.log("clicked '3'")}>
            Dolor
          </ButtonList.Button>
        </ButtonList>
        <div style={{padding: '10px 0px 10px 0px'}}>
        하늘과 산의 푸름은 바다를 닮았으나
        </div>
        <BouncingLabel style='texture' size='regular'>Lorem</BouncingLabel>

      <div>
        <CircularText 
          radius={210} 
          text='HI! I AM A JUNIOR SERVER ENGINEER. I MAINLY USE KOTLIN AND SPRING'
          textBy='inside'
          fontColor='#e0e0e0'
          fontSize='32px'
          fontWeight='bold'
        />
      </div>
      </Background>
    </>
  )
}
