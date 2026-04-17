import { useState } from "react";

function FeedbackForm({ onAddFeedback }) {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name.trim() === "" || feedback.trim() === "") {
      setError("Please fill all fields");
      return;
    }

    const newEntry = {
      id: Date.now(),
      name,
      feedback,
    };

    onAddFeedback(newEntry);

    // Reset form
    setName("");
    setFeedback("");
    setError("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Enter your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;