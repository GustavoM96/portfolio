import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./components/Menu";
import About from "./components/About";
import Presents from "./components/Presents";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ContainerMax from "./components/containerMax";

function App() {
  return (
    <div className="App">
      <ContainerMax>
        <ButtonAppBar />
        <Presents />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </ContainerMax>
    </div>
  );
}

export default App;
