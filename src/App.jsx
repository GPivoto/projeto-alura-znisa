
import About from "./assets/components/About/About"
import Clients from "./assets/components/Clients/Clients"
import Contact from "./assets/components/Contact/Contact"
import Footer from "./assets/components/Footer/Footer"
import Header from "./assets/components/Header/Header"
import Hero from "./assets/components/Hero/Hero"
import Projetos from "./assets/components/Projetos/Projetos"


const App = () =>{
  return(
    <div>
      <Header title='znisa' />
      <Hero title="I design and build clean websites" text="Write anything here something about yourself to showcase what actually you doing or targeting etc." />
      <About  title='My process to design'/> 
      <Projetos title="Some Featured projects"/>
      <Clients title="Client testimonials"/>
      <Contact title="Have idea about project?" />
      <Footer text="znisa"/>
      
      
      
      
    </div>
  )
}

export default App