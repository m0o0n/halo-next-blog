import { MainLayout } from '@/components/common/Layout/MainLayout'
import { OurTeam } from '@/components/OurTeam/OurTeam'
import { TopBanner } from '@/components/TopBanner/TopBanner'

export default function Home() {
  return (
    <MainLayout>
      <TopBanner />
      <OurTeam />
    </MainLayout>
  )
}
