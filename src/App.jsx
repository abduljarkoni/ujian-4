import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Resume from "./components/pages/resume/Resume";
import Skill from "./components/pages/skills/Skill";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Blog from "./components/pages/blog/Blog";
import Contact from "./components/pages/contact/Contact";
// import Poster from "./components/pages/blog/Poster";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container_app">
          <div className="box1_app">
            <Navbar />
          </div>
          <div className="box2_app">
            <Home />
          </div>

          <div className="box2_app">
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/skill">
                <Skill />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
