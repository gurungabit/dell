import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./signin/SignIn";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={SignIn} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
