export default function Feedback({ cafe, totalFeedback, goodFeedback }) {
    return (
        <div>
            <p>Good: {cafe.good}</p>
            <p>Neutral: {cafe.neutral}</p>
            <p>Bad: {cafe.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {goodFeedback}%</p>
        </div>
    );
}
