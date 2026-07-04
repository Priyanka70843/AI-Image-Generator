import { useState } from "react";
import "./ImageGenerator.css";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("1024");

  const generateImage = () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    setLoading(true);

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=${size}&height=${size}&nologo=true&seed=${Date.now()}`;

    const img = new Image();

    img.onload = () => {
      setImage(imageUrl);
      setLoading(false);
    };

    img.onerror = () => {
      alert("Failed to generate image.");
      setLoading(false);
    };

    img.src = imageUrl;
  };

  return (
    <div className="container">
      <div className="controls">
        <div className="prompt">
          <input
            type="text"
            placeholder="Describe your image... "
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <div className="select-wrap">
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="256">256 × 256</option>
            <option value="512">512 × 512</option>
            <option value="1024">1024 × 1024</option>
          </select>
        </div>
      </div>

      <div className="actions">
        <button className="btn" onClick={generateImage}>
          {loading ? "Generating..." : "Generate"}
        </button>
        {image && !loading && (
          <a
  href={image}
  download="AI_Image.png"
  className="btn secondary"
  style={{
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  Download
</a>
        )}
      </div>

      {loading && <div className="loader"></div>}

      {image && !loading && (
        <div className="preview">
          <img src={image} alt="Generated" />
        </div>
      )}
    </div>
  );
}