const Stats = ({ good, neutral, bad, total }) => {
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
