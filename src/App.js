import "./App.css";
import ButtonAppBar from "./components/Menu";
import About from "./components/About";
import Presents from "./components/Presents";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ContainerMax from "./components/containerMax";
import { Star, Star3, Star2 } from "./styles/stars";
import { BackGround } from "./styles/backGround";

import ContainerMain from "./components/containerMain";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <BackGround />
      <ButtonAppBar />
      <ContainerMax>
        <>
          <Star />
          <Star2 />
          <Star3 />
        </>
        <ContainerMain>
          <Presents />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </ContainerMain>
      </ContainerMax>
    </>
  );
}

export default App;
