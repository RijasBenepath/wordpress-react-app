import Home from "./components/Home";
import { Router } from "@reach/router";
import SinglePost from "./components/SinglePost";
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <SinglePost path="/post/:id" />
      </Router>
    </div>
  );
}

export default App;
