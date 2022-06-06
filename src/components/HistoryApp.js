import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/HistoryApp.css";
import NavbarHistory from "./header/NavbarHistory";
import FooterHistory from "./footer/FooterHistory";
import HomeHistory from "./body/HomeHistory";
import HomeTest from "./body/HomeTest";
import MemeDetailPage from "./body/MemeDetailPage";
import {
  generateInitialUsers,
  autoLogin,
  AuthContext,
} from "../components/models/user";
import MemeQuestionTest from "./body/MemeQuestionTest";
generateInitialUsers();

export default function HistoryApp() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const theUser = autoLogin();
    setCurrentUser(theUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <div className="history-main">
          <header className="header-history-main">
            <NavbarHistory />
          </header>
          <section className="section-history-main">
            <Routes>
              {/* Đường dẫn Link */}
              <Route path="/" element={<HomeHistory />} />
              <Route path="/HomeTest" element={<HomeTest />} />
              <Route path="/memes/:id" element={<MemeDetailPage />} />
              <Route path="/memeQuestionTest/:id" element={<MemeQuestionTest />} />
            </Routes>
          </section>
          <footer className="footer-history-main">
            <FooterHistory />
          </footer>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
