import CustomCursor from '@/components/CustomCursor'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Nav from '@/components/Nav'
import ScrollProgress from '@/components/ScrollProgress'

interface SiteShellProps {
  children: React.ReactNode
  loader?: boolean
}

export default function SiteShell({ children, loader = false }: SiteShellProps) {
  return (
    <>
      <ScrollProgress />
      {loader && <Loader />}
      <CustomCursor />
      <Nav />
      {children}
      <Footer />
    </>
  )
}
