import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* -----------Navbar---------- */}
      <Navbar />
      {/* -----------Main---------- */}
      <main className="min-h-screen mt-24">
        <Outlet />
      </main>
      {/* -----------Footer---------- */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
