export default function Feedback({ cafe }) {
    return (<div>
        <p>Good: {cafe.good}</p>
        <p>Neutral: {cafe.neutral}</p>
        <p>Bad: {cafe.bad}</p>
    </div>);
}

