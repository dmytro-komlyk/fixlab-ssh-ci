import {
  AddressSection,
  BrokenSection,
  CallCourierSection,
  ColaborationSection,
  HeroSection,
} from './(layouts)'
import getData from './(server)/api/service/getData'

export default async function Home() {
  const categoriesUrl = `/api/categories?populate=*&sort=id:asc`
  const categoryData = await getData(categoriesUrl)
  return (
    <main className='flex-auto'>
      <HeroSection />
      <BrokenSection categoryData={categoryData} />
      <CallCourierSection />
      <ColaborationSection />
      <AddressSection />
    </main>
  )
}
