import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
      {/* Display */}
      <div className="bg-black text-white text-right text-2xl p-4 rounded-lg mb-4 h-16 overflow-hidden">
        {input || "0"}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-3">
        <button
          onClick={handleClear}
          className="col-span-2 bg-red-500 text-white p-4 rounded-lg font-bold hover:bg-red-600"
        >
          C
        </button>
        <button
          onClick={handleBackspace}
          className="bg-yellow-500 text-white p-4 rounded-lg font-bold hover:bg-yellow-600"
        >
          ⌫
        </button>
        <button
          onClick={() => handleClick("/")}
          className="bg-blue-500 text-white p-4 rounded-lg font-bold hover:bg-blue-600"
        >
          ÷
        </button>

        {[7, 8, 9].map((n) => (
          <button
            key={n}
            onClick={() => handleClick(n.toString())}
            className="bg-gray-700 text-white p-4 rounded-lg font-bold hover:bg-gray-600"
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => handleClick("*")}
          className="bg-blue-500 text-white p-4 rounded-lg font-bold hover:bg-blue-600"
        >
          ×
        </button>

        {[4, 5, 6].map((n) => (
          <button
            key={n}
            onClick={() => handleClick(n.toString())}
            className="bg-gray-700 text-white p-4 rounded-lg font-bold hover:bg-gray-600"
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => handleClick("-")}
          className="bg-blue-500 text-white p-4 rounded-lg font-bold hover:bg-blue-600"
        >
          −
        </button>

        {[1, 2, 3].map((n) => (
          <button
            key={n}
            onClick={() => handleClick(n.toString())}
            className="bg-gray-700 text-white p-4 rounded-lg font-bold hover:bg-gray-600"
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => handleClick("+")}
          className="bg-blue-500 text-white p-4 rounded-lg font-bold hover:bg-blue-600"
        >
          +
        </button>

        <button
          onClick={() => handleClick("0")}
          className="col-span-2 bg-gray-700 text-white p-4 rounded-lg font-bold hover:bg-gray-600"
        >
          0
        </button>
        <button
          onClick={() => handleClick(".")}
          className="bg-gray-700 text-white p-4 rounded-lg font-bold hover:bg-gray-600"
        >
          .
        </button>
        <button
          onClick={handleCalculate}
          className="bg-green-500 text-white p-4 rounded-lg font-bold hover:bg-green-600"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
