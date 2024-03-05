// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
      <div className="container">
        <header className="row mb-3 border">
          <Header />
          <Navigation />
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="row mt-3 border">
          <Footer />
        </footer>
      </div>
  );
}
