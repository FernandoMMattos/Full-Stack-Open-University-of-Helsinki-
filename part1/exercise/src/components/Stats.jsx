import StatisticLine from "./StatisticLine";

const Stats = ({ good, neutral, bad, total }) => {
  if (!total) return <p>No feedback given</p>;
  return (
    <div>
      <StatisticLine text="good:" value={good} />
      <StatisticLine text="neutral:" value={neutral} />
      <StatisticLine text="bad:" value={bad} />
      <StatisticLine text="all:" value={total} />
      <StatisticLine text="average:" value={(good + -bad / 3) / 10} />
      <StatisticLine text="positive:" value={(good * 100) / total} />
    </div>
  );
};

export default Stats;
