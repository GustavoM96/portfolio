import "./App.css";
import ButtonAppBar from "./components/Menu";
import About from "./components/About";
import Presents from "./components/Presents";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { BackGround } from "./components/backGround";
import ContainerMax from "./components/containerMax";
import { Star, Star3, Star2 } from "./styles/stars/stlyle";
import ContainerMain from "./components/containerMain";

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
          <Footer />
        </ContainerMain>
      </ContainerMax>
    </>
  );
}

export default App;
