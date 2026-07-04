import ImageGenerator from "./Component/ImageGenerator";
import "./index.css";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <h1>AI Image Generator</h1>
          <p>Create stunning images from text prompts</p>
        </div>
      </header>

      <main>
        <ImageGenerator />
      </main>

    </div>
  );
}

export default App;