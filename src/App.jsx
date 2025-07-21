import { A11yLens } from "@karameht/a11y-lens";
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Hero Section - intentionally poor contrast */}
      <div style={{ background: "#333", color: "#555", padding: "20px" }}>
        <h1>A11yLens Demo | BETA</h1>
        <p>Watch the magic happen in real-time!</p>
      </div>

      <hr />

      {/* Interactive Elements Without Proper Semantics */}
      <section style={{ padding: "20px" }}>
        <h2>Interactive Elements</h2>

        {/* Fake button without keyboard support */}
        <div
          role="button"
          onClick={() => alert("This should be a real button!")}
        >
          Fake button without keyboard support
        </div>

        {/* Empty button */}
        <button></button>

        {/* Button without accessible name */}
        <button onClick={() => console.log("click")}></button>

        {/* Counter with proper button */}
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>Count: {count}</span>
      </section>

      <hr />

      {/* Images Without Alternative Text */}
      <section style={{ padding: "20px" }}>
        <h2>Images</h2>

        {/* Missing alt text */}
        <img src={viteLogo} className="logo" />
        <img src={reactLogo} className="logo react" />

        {/* Image without alt AND title */}
        <img src={viteLogo} style={{ width: "50px", height: "50px" }} />
      </section>

      <hr />

      {/* Forms Without Proper Labels */}
      <section style={{ padding: "20px" }}>
        <h2>Form Elements</h2>

        {/* Inputs without labels */}
        <div style={{ marginBottom: "10px" }}>
          <input type="text" placeholder="Text input without label" />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input type="password" placeholder="Password without label" />
        </div>

        {/* Input with empty aria-label */}
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            aria-label=""
            placeholder="Email with empty aria-label"
          />
        </div>

        {/* Select without label */}
        <div style={{ marginBottom: "10px" }}>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>

        {/* Textarea without label */}
        <div style={{ marginBottom: "10px" }}>
          <textarea placeholder="Textarea without label"></textarea>
        </div>

        {/* Radio buttons without fieldset */}
        <div style={{ marginBottom: "10px" }}>
          <input type="radio" name="test" id="radio1" />
          <span>Option 1</span>
          <input type="radio" name="test" id="radio2" />
          <span>Option 2</span>
        </div>
      </section>

      <hr />

      {/* Form with Mismatched Labels */}
      <section style={{ padding: "20px" }}>
        <h2>Broken Form</h2>

        <form>
          <div style={{ marginBottom: "10px" }}>
            <input type="text" id="bad1" placeholder="Input with wrong label" />
            <label htmlFor="wrong-id">
              Label pointing to non-existent element
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="email"
              required
              placeholder="Required email without label"
            />
          </div>

          <button type="submit"></button>
        </form>
      </section>

      <hr />

      {/* Links and Navigation */}
      <section style={{ padding: "20px" }}>
        <h2>Links</h2>

        {/* Link without text */}
        <a href="#"></a>

        {/* Non-descriptive link */}
        <a href="#" onClick={(e) => e.preventDefault()}>
          Click here
        </a>

        {/* Another non-descriptive link */}
        <a href="#" onClick={(e) => e.preventDefault()}>
          Read more
        </a>
      </section>

      <hr />

      {/* Heading Hierarchy Issues */}
      <section style={{ padding: "20px" }}>
        <h2>Heading Structure</h2>

        {/* Skipped heading level */}
        <h4>This should be h3 (skipped level)</h4>

        <p>Content under the wrong heading level.</p>
      </section>

      <hr />

      {/* Language and Content Issues */}
      <section style={{ padding: "20px" }}>
        <h2>Language Issues</h2>

        {/* Content in different language without lang attribute */}
        <div>Bonjour le monde! This French text has no lang attribute.</div>

        {/* More foreign language content */}
        <p>Hola mundo! Spanish content without proper markup.</p>
      </section>

      <hr />

      {/* Additional Form Issues */}
      <section style={{ padding: "20px" }}>
        <h2>More Form Problems</h2>

        <form>
          <input type="password" placeholder="Another unlabeled password" />
          <input type="checkbox" />
          <span>Unlabeled checkbox</span>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Legal Footer */}
      <footer
        style={{
          borderTop: "1px solid #ccc",
          padding: "20px",
          marginTop: "40px",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
        }}
      >
        <p>
          Built with ❤️ by{" "}
          <a
            href="https://karameht.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            karameht
          </a>
        </p>
        <p style={{ marginTop: "10px" }}>
          <a
            href="https://karameht.com/impressum/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#666" }}
          >
            Impressum
          </a>
          |
          <a
            href="https://karameht.com/datenschutz/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#666" }}
          >
            Datenschutz
          </a>
        </p>
      </footer>

      {/* A11yLens Panel - The star of the show! */}
      <A11yLens forceShow={true} debug={true} />
    </>
  );
}

export default App;
