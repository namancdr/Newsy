import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import News from './components/News';
import About from './components/About';

function App() {
  return (
    <Router className="App">

      <Navbar />

      <Switch>
          <Route exact path="/">
            <News key="top" category="top" />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/business">
              <News key="business" category="business" />
          </Route>
          <Route exact path="/entertainment">
              <News key="entertainment" category="entertainment" />
          </Route>
          <Route exact path="/environment">
              <News key="environment" category="environment" />
          </Route>
          <Route exact path="/food">
              <News key="food" category="food" />
          </Route>
          <Route exact path="/health">
              <News key="health" category="health" />
          </Route>
          <Route exact path="/politics">
              <News key="politics" category="politics" />
          </Route>
          <Route exact path="/science">
              <News key="science" category="science" />
          </Route>
          <Route exact path="/sports">
              <News key="sports" category="sports" />
          </Route>
          <Route exact path="/technology">
              <News key="technology" category="technology" />
          </Route>
          <Route exact path="/world">
              <News key="world" category="world" />
          </Route>
            
        </Switch>
    </Router>
  );
}

export default App;
