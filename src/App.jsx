import { useState, React } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl bg-white px-3 py-2">
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white  font-bold"
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white font-bold"
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white font-bold"
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-black font-bold"
              onClick={() => setColor("yellow")}
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white font-bold"
              onClick={() => setColor("purple")}
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white font-bold"
              onClick={() => setColor("orange")}
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white font-bold"
              onClick={() => setColor("olive")}
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white font-bold"
              onClick={() => setColor("black")}
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white font-bold"
              onClick={() => setColor("brown")}
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-black font-bold"
              onClick={() => setColor("cyan")}
              style={{ backgroundColor: "cyan" }}
            >
              Cyan
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-black font-bold"
              onClick={() => setColor("pink")}
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white font-bold"
              onClick={() => setColor("magenta")}
              style={{ backgroundColor: "magenta" }}
            >
              Magenta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
