import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || feedback.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name,
      feedback,
    };

    setFeedbackList([...feedbackList, newFeedback]);

    setName("");
    setFeedback("");
  };

  return (
    <div className="container">
      <h1>Feedback Form</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="form">
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
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Feedback List Section */}
      <div className="feedback-list">
        <h2>Submitted Feedback</h2>

        {feedbackList.length === 0 ? (
          <p>No feedback yet</p>
        ) : (
          feedbackList.map((item) => (
            <div key={item.id} className="feedback-item">
              <h3>{item.name}</h3>
              <p>{item.feedback}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;