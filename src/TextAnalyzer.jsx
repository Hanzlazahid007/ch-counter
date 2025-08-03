// src/components/TextAnalyzer.jsx
import React, { useState } from "react";

const TextAnalyzer = () => {
  const [input, setInput] = useState("");
  const [analysis, setAnalysis] = useState({});

  const analyzeText = (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = text.split(/\n+/).filter(Boolean).length;
    const spaces = text.split(" ").length - 1;
    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const digits = (text.match(/\d/g) || []).length;
    const specialChars = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

    setAnalysis({
      words,
      characters,
      sentences,
      paragraphs,
      spaces,
      letters,
      digits,
      specialChars,
    });
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
    analyzeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">appXweb</h1>
        <p className="mt-2">
          Your favorite character counter, with a dark mode!
        </p>
        <p className="mt-2">
          Tally word counter is a free online tool to count the number of
          characters, words, and paragraphs in your text. Tally can also count
          the number of digits, spaces, and special characters. Make sure you
          have the required number of words for your essay or article by
          counting them instantly.
        </p>
        <p className="mt-2">
          Also, Tally character counter has other themes in the settings, so
          check them out if you want a different look. Please bookmark this page
          to use Tally whenever you need.
        </p>
      </div>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="The quick brown fox jumps over the lazy dog..."
        className="w-full max-w-4xl p-4 mb-6 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="6"
      ></textarea>
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Analysis:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <strong>Characters:</strong> {analysis.characters ?? "-"}
          </div>
          <div>
            <strong>Words:</strong> {analysis.words ?? "-"}
          </div>
          <div>
            <strong>Sentences:</strong> {analysis.sentences ?? "-"}
          </div>
          <div>
            <strong>Paragraphs:</strong> {analysis.paragraphs ?? "-"}
          </div>
          <div>
            <strong>Spaces:</strong> {analysis.spaces ?? "-"}
          </div>
          <div>
            <strong>Letters:</strong> {analysis.letters ?? "-"}
          </div>
          <div>
            <strong>Digits:</strong> {analysis.digits ?? "-"}
          </div>
          <div>
            <strong>Special Characters:</strong> {analysis.specialChars ?? "-"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;
