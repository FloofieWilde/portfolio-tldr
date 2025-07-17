import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Projects from "./components/projects/Projects";
import WhoAmI from "./components/who-i-am/WhoAmI";
import './App.css';
import styled from "styled-components";
import { colors } from "./theme/colors.style"

function App() {
  return (
    <AppStyle className="app">
      <Header />
      <div class="app_container">
        <Landing />
        <WhoAmI />
        <Projects />
        <Contact />
      </div>
    </AppStyle>
  );
}

const AppStyle = styled.div`
    background-color: ${colors.background};
    color: ${colors.text};
`

export default App;
