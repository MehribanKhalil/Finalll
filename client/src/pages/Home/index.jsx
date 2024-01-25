
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../components/HomeComponents/HeroSection'
import CourseSection from '../../components/HomeComponents/CourseSection'
import ServiceSection from '../../components/HomeComponents/ServiceSection'
import RegisterSection from '../../components/HomeComponents/RegisterSection'
import UpcomingSection from '../../components/HomeComponents/UpcomingSection'

const Home = () => {
  return (
    <main>
         <Helmet>
        <title>Home</title>
      </Helmet>

      <HeroSection/>
      <CourseSection/>
      <ServiceSection/>
      <RegisterSection/>
      <UpcomingSection/>
    </main>
  )
}

export default Home
