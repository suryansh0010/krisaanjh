import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import UniqueRegister from "./components/forlogin/UniqueRegister";
import FrontPage from "./components/front/FrontPage";
import ChatBot from "./components/chatbot/ChatBot";
import Market from "./components/Market/Market";
import MarketFirstPage from "./components/Market/MarketFirstPage";
import ReadMore from "./components/secondPage/ReadMore";
import App1 from "./components/Appss/App1";
import App2 from "./components/Appss/App2";
import PDFGenerator from "./components/Appss/PDFGenerator";

function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UniqueRegister />} />
            <Route path="/Home" element={<FrontPage />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/market" element={<Market />} />
            <Route path="/marketfirstPage" element={<MarketFirstPage />} />
            <Route path="/readmore" element={<ReadMore />} />
            <Route path="/App1" element={<App1 />} />
            <Route path="/App2" element={<App2 />} />
            <Route path="/App3" element={<PDFGenerator />} />
            <Route path="/*" element={<FrontPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
