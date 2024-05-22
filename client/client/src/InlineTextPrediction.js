import React from "react";
import InlinePredict from "react-inline-predict";

const predictions = [
  "Hello, how are you?",
  "Hello, what's your name?",
  "Hello, I need help with my project.",
  "Hello, can you help me?",
]; // These are static predictions, you might want to fetch these dynamically from a server or API.

const InlineTextPrediction = () => {
  return (
    <div style={{ margin: 20 }}>
      <h2>Inline Text Prediction</h2>
      <InlinePredict
        placeholder="Type 'Hello,' and see the prediction..."
        predictions={predictions}
        renderPrediction={(prediction, onClick) => (
          <div
            onClick={onClick}
            style={{
              padding: 10,
              cursor: "pointer",
              backgroundColor: "#f0f0f0",
              marginTop: 5,
            }}
          >
            {prediction}
          </div>
        )}
      />
    </div>
  );
};

export default InlineTextPrediction;
