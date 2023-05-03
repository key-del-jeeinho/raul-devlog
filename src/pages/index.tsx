import BouncingImage from '@/components/atoms/BouncingImage'
import DraggableBouncingImage from '@/components/molecules/DraggableBouncingImage'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{display: 'inline'}}>
      <BouncingImage src={"https://source.unsplash.com/random/300x300"} alt={'test'} width={300} height={200}/>
      <DraggableBouncingImage src={"https://source.unsplash.com/random/300x300"} alt={'test'} width={300} height={300} isFixed={false}/>
      <DraggableBouncingImage src={"https://source.unsplash.com/random/300x300"} alt={'test'} width={200} height={300} isFixed={true}/>
    </div>
  )
}
