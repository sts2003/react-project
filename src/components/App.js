import React from "react";
import AppShell from "./AppBar";
import { HashRouter as Router, Route } from "react-router-dom";
import MovieList from "./MovieList";
import DramaList from "./DramaList";
import MainPage from "./MainPage";

//movieApi Key : 0ff05e1049342b3ec508d217c36672d4

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppShell>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/movie" component={MovieList} />
            <Route exact path="/drama" component={DramaList} />
            <Route exact path="/x" component={MainPage} />
          </div>
        </AppShell>
      </Router>
    );
  }
}

export default App;
