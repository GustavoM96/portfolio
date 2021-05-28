import "./App.css";
import ButtonAppBar from "./components/Menu";
import About from "./components/About";
import Presents from "./components/Presents";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ContainerMax from "./components/containerMax";
import { Star, Star3, Star2, StarFinal } from "./styles/stars";
import { BackGround } from "./styles/backGround";
import ContainerMain from "./components/containerMain";
import Contact from "./components/Contact";
import { Diviser } from "./styles/diviser";
import "./animations/index.css";
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
          <StarFinal />
        </>
        <ContainerMain>
          <Presents />
          <Diviser />
          <About />
          <Diviser />
          <Skills />
          <Diviser />
          <Projects />
          <Diviser />
          <Contact />
          <Diviser />
          <Footer />
        </ContainerMain>
      </ContainerMax>
    </>
  );
}

export default App;
