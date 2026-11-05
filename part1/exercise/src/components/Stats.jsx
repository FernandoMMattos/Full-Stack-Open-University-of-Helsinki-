import StatisticLine from "./StatisticLine";

const Stats = ({ good, neutral, bad, total }) => {
  if (!total) return <p>No feedback given</p>;
  return (
    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={((good + -bad / 3) / 10).toFixed(1)} />
      <StatisticLine text="positive" value={((good * 100) / total).toFixed(1)} />
    </table>
  );
};

export default Stats;
