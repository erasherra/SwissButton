import logo from "./logo.svg";
import "./App.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import NoPage from "./pages/NoPage";
import MainButton from "./components/MainButton";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainButton/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div className="routes">
        <BrowserRouter>
          <Routes>
              <Route path="page1" element={<Page1 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
