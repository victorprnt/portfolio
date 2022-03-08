import AboutMe from 'components/AboutMe'
import Contact from 'components/Contact'
import Header from 'components/Header'
import Projects from 'components/Projects'
// import Welcome from 'components/Welcome'

export default function Home() {
  return (
    <>
      <Header />
      {/* <Welcome /> */}
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}
