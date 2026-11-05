import { useState } from "react";
import Button from "./components/Button";
import Stats from "./components/Stats";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
    setTotal(total + 1);
    return good;
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    return neutral;
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    return bad;
  };

  return (
    <div>
      <h1>Give us your feedback</h1>
      <div>
        <Button onClick={handleGoodFeedback} text="good" />
        <Button onClick={handleNeutralFeedback} text="neutral" />
        <Button onClick={handleBadFeedback} text="bad" />
      </div>
      <h2>Stats</h2>
      <Stats good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
