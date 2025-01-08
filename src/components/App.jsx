import React, { useState, useEffect } from "react";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import Notification from "./Notification";


const App = () => {
    const [cafe, setCafe] = useState(() => {
        const savedCafe = window.localStorage.getItem("saved-cafe");
        if (savedCafe !== null) {
            return JSON.parse(savedCafe);
        }
        return { good: 0, neutral: 0, bad: 0 };
    });

    const updateFeedback = (feedbackType) => {
        setCafe((prevCafe) => ({
            ...prevCafe,
            [feedbackType]: prevCafe[feedbackType] + 1
        }));
    };

    const resetFeedback = () => {
        setCafe({ good: 0, neutral: 0, bad: 0 });
    };

    const totalFeedback = cafe.good + cafe.neutral + cafe.bad;
    const hasFeedback = totalFeedback > 0;
    const goodFeedback = hasFeedback
        ? Math.round((cafe.good / totalFeedback) * 100)
        : 0;

    useEffect(() => {
        window.localStorage.setItem("saved-cafe", JSON.stringify(cafe));
    }, [cafe]);

    return (
        <>
            <Description />
            <Options
                updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                hasFeedback={hasFeedback}
            />
            {hasFeedback ? (
                <Feedback
                    cafe={cafe}
                    totalFeedback={totalFeedback}
                    goodFeedback={goodFeedback}
                />

            ) : <Notification />}
        </>
    );
};

export default App;
