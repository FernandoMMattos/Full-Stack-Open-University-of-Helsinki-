const Stats = ({ good, neutral, bad, total }) => {
  if (!total) return <p>No feedback given</p>
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {(good + -bad / 3) / 10}</p>
      <p>positive: {(good * 100) / total}</p>
    </div>
  );
};

export default Stats;
