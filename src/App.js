import logo from "./logo.svg";
import "./App.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import MainButton from "./components/MainButton";
import { showMesage, showTimedMessage } from "./components/MainButton/actions/chat";
import { heartEye } from "./components/MainButton/actions/feelings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  
  const test1 = (event) => {
    event.preventDefault();
    showTimedMessage("❤️!", 2000);
    console.log("test2 event");
    heartEye();
    
  };

  const myButton = [
    [
      "ROOT",
      [
        {
          key: "asd",
          type: "Button",
          text: "ACTION",
          onClickAction: test1,
          link: null,
          color: "none",
          textColor: "none",
        },
        {
          key: "asd2",
          type: "Link",
          text: "PAGE1",
          onClickAction: null,
          link: "/Page1",
          color: "1",
          textColor: "none",
        }
      ],
    ],
    [
      "state2",
      [
        {
          key: "asd3",
          type: "Link",
          text: "HOME",
          link: "/",
        }
      ],
    ],
  ]
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <div className="App" >
        <MainButton elements={myButton} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </header>
        <div className="routes"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
