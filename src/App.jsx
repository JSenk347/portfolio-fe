import Navbar from "./components/navbar/Navbar"
import Profile from "./components/profile/Profile"
import About from "./components/about/About"
import XP from "./components/experience/XP"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
    <section id="navbar">
      <Navbar/>
    </section>
    <section id="profile">
      <Profile/>
    </section>
    <section id="about">
      <About/>
    </section>
    <section id="experience">
      <XP/>
    </section>
    <section id="projects">
      <Projects/>
    </section>
    <section id="contact">
      <Contact/>
    </section>
    <section id="footer">
      <Footer/>
    </section>
    </>
  )
}

export default App
