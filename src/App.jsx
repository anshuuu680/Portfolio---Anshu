import About from "./Pages/About";
import Contact from "./Pages/Contact.jsx";
import Footer from "./Pages/Footer.jsx";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Tech from "./Pages/Tech";

function App() {
  return (
    <div
      className="flex flex-col overflow-x-hidden font-mono"
      style={{
        backgroundImage: `url('/background.svg')`,
      }}
    >
      <Home />
      <About />
      <Tech />
      <Project />
      <Contact />
      <Footer/>

    </div>
  );
}

export default App;
