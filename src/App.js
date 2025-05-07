import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Projects from "./components/projects/Projects";
import WhoAmI from "./components/who-i-am/WhoAmI";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div class="app_container">
        <Landing />
        <WhoAmI />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
