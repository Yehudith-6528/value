import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesList from "./components/moviesList";
import { Provider,useSelector } from "react-redux";
import Message from "./components/message";

function App() {

  return (
    <div className="App">
     
        <Router>
     
          <Switch>
            <Route path="/" component={MoviesList} />
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
