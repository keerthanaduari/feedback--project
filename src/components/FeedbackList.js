function FeedbackList({ feedbacks }) {
  return (
    <div className="list">
      <h2>Feedback Entries</h2>

      {feedbacks.length === 0 ? (
        <p>No feedback available</p>
      ) : (
        feedbacks.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>{item.feedback}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;