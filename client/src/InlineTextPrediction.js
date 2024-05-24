import React, { useState } from "react";

const InlineTextPrediction = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const predictions = [
    "Hello, how are you?",
    "Hello, what's your name?",
    "Hello, I need help with my project.",
    "Hello, can you help me?",
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);

    if (value.length > 2) {
      const matchedPredictions = predictions.filter((prediction) =>
        prediction.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(matchedPredictions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{ width: "300px", padding: "10px" }}
      />
      {suggestions.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                cursor: "pointer",
                padding: "5px",
                backgroundColor: "#f0f0f0",
                marginTop: "5px",
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InlineTextPrediction;
