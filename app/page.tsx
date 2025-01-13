import Image from "next/image";
import NavBar from "./_components/navbar"
import Footer from "./_components/footer"
import Hero from "./_components/hero"
import Hero2 from "./_components/hero2"
import Projects from './_components/projects'
import Skills from './_components/skills'



export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      {/* <Hero></Hero> */}
      <Hero2></Hero2>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}
