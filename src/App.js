import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Projects from "./components/projects/Projects";
import WhoAmI from "./components/who-i-am/WhoAmI";
import './App.css';
import styled from "styled-components";
import { changeTheme, colors } from "./theme/themeService";

function App() {

  return (
    <AppStyle className="app">
      <Header />
      <div className="app_container">
        <Landing />
        <WhoAmI />
        <Projects />
        <Contact />
        <input onChange={(event) => {
          changeTheme(event.target.value);
        }}></input>
      </div>
    </AppStyle>
  );
}


const AppStyle = styled.div`
    background: ${colors.background};
    color: ${colors.text};

    a {
      color: inherit;
      text-decoration: none;
    }
`

export default App;
