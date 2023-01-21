import { MainLayout } from '@/components/common/Layout/MainLayout'
import { GetStarted } from '@/components/GetStarted/GetStarted'
import { Info } from '@/components/Info/Info'
import { OurTeam } from '@/components/OurTeam/OurTeam'
import Slick from '@/components/Slider/Slider'
import { TopBanner } from '@/components/TopBanner/TopBanner'

export default function Home() {
  return (
    <MainLayout>
      <TopBanner />
      <OurTeam />
      <GetStarted />
      <Info />
      <Slick />
    </MainLayout>
  )
}
