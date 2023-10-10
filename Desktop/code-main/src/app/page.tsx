import { Footer } from '@/shared/components/Footer'
import { Header } from '@/shared/components/Header'
import { Operatin } from '@/shared/components/Operatin'
import { Pricing } from '@/shared/components/Princing'
import { Services } from '@/shared/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-w-full items-center'>
      <Header/>
      <Services/>
      <Operatin/>
      <Footer/>
    </div>
  )
}
