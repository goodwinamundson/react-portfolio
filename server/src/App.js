import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";

import AboutMePage from "./pages/AboutMePage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactMePage from "./pages/ContactMePage"
import Footer from "./components/Footer"
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={AboutMePage} />
      <Route path="/about" component={AboutMePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route exact path="/contact" component={ContactMePage} />
      <Footer />
    </Router >
  );
}

export default App;