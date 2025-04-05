
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface Props {
  commits: any[];
}

const CommitChart = ({ commits }:Props) => {

  const commitCountByDate = commits.reduce((acc, commit) => {
    const date = commit.commit.author.date.split('T')[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  const data = Object.entries(commitCountByDate).map(([date, count]) => ({
    date,
    commits: count,
  }));

  return (
    <div >
      <h2 className="text-xl">Daily Commits</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="commits" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default CommitChart;