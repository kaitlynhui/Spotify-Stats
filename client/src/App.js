import { useEffect, useState } from "react";
import { accessToken, logout, getCurrentUserProfile, getTopArtists } from "./spotify";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import styled from 'styled-components/macro';
import { GlobalStyle } from './styles';
import { Artists, ErrorPage, Home, Login, Tracks } from './pages';
import { Navbar } from "./components";



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        setProfile(data);

      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="Header">
        {!token ? (
          <div>
          <Router>
          <ScrollToTop />
            <Routes>
            <Route path="/" element={<Login />} />
            </Routes>
          </Router>
          </div>
        ) : (
          <Router>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-artists" element={<Artists />} />
              <Route path="/top-tracks" element={<Tracks />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
