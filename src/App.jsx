import Navbar from "./components/navbar/Navbar"
import Profile from "./components/profile/Profile"
import About from "./components/about/About"

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
    </>
  )
}

export default App
