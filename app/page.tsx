import NavBar from "./_components/navbar"
import Footer from "./_components/footer"
import Hero from "./_components/hero"
import Projects from './_components/projects'
import Skills from './_components/skills'

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
}
