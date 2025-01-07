import React, { useState, useEffect } from "react";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";

const App = () => {
    const [cafe, setCafe] = useState(() => {
        const savedCafe = window.localStorage.getItem("saved-cafe");
        if (savedCafe !== null) {
            return JSON.parse(savedCafe);
        }
        return { good: 0, neutral: 0, bad: 0 };
    });

    const updateFeedback = (feedbackType) => {
        setCafe((cafe) => ({
            ...cafe,
            [feedbackType]: cafe[feedbackType] + 1
        }));
    };

    const totalFeedback = cafe.good + cafe.neutral + cafe.bad;
    const hasFeedback = totalFeedback > 0;
    const goodFeedback = Math.round((cafe.good / totalFeedback) * 100);

    useEffect(() => {
        window.localStorage.setItem("saved-cafe", JSON.stringify(cafe));
    }, [cafe]);

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} />

            {hasFeedback ? (
                <>
                    <button onClick={() => setCafe({ good: 0, neutral: 0, bad: 0 })}>Reset</button>
                    <Feedback cafe={cafe} />
                    <p>Total: {totalFeedback}</p>
                    <p>Positiv: {goodFeedback}%</p>
                </>
            ) : (
                    <p>No feedback yet</p>
                )}
        </>
    );
};

export default App;
