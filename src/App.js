import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./components/Menu";
import About from "./components/About";
import Presents from "./components/Presents";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { BackGround } from "./components/backGround";
import ContainerMax from "./components/containerMax";
import { Star } from "./components/backGround/style";
import ContainerMain from "./components/containerMain";

function App() {
  return (
    <>
      <BackGround />
      <ContainerMax>
        <ButtonAppBar />
        <ContainerMain>
          <Star />
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
