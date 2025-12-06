import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Hello</h1>;
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("Cannot find Root element");
}

const root = createRoot(container);

root.render(<App />);
