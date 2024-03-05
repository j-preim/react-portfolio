import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Footer from "./components/Footer";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-3 border">
            <Header />
          <Navigation />
        </div>

        <div className="row mb-3 border">
          <Project />
        </div>

        <div className="row border">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
