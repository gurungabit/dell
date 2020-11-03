import "./App.css";
import Header from "./header/Header";
import Input from "./input/Input";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/input" component={Input} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
