import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import XP from "./components/experience/XP";
import Projects from "./components/projects/Projects";

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
    </>
  )
}

export default App
