import Summarizer from "./components/Summarizer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <div className="app">
          <Hero />
          <Summarizer />
        </div>
      </main>
    </>
  );
}

export default App;
