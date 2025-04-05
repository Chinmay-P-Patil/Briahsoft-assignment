import { useState } from 'react';
import { Input } from './components/ui/input';
import { Button } from "./components/ui/button"
import RepoList from './RepoList';
import CommitChart from './CommitChart';
import './index.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState<any[]>([]);
  const [commits, setCommits] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {

      const Repos = (await fetch(`https://api.github.com/users/${username}/repos`)).json();
      if (!Repos) throw new Error('Failed to fetch repos');
      console.log(Repos);

      const repoData = await Repos;
      setRepos(repoData);


      const commitData: any[] = [];
      for (const repo of repoData) {
        const commitResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`);
        if (!commitResponse.ok) continue; 
        const userCommits = await commitResponse.json();
        commitData.push(...userCommits);
      }
      console.log(commitData);
      setCommits(commitData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }


    setLoading(false);
  };

  return (
    <>
    <div className="p-4 flex flex-col items-center gap-5">
      <div className="text-4xl mb-4 font-bold">GitHub Profile Analyzer</div>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className='w-100'
      />
      <Button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Get the activities'}
      </Button>
      {repos.length > 0 && <RepoList repos={repos} />}
      {commits.length > 0 && <CommitChart commits={commits} />}
    </div>
    </>
    
  );
};

export default App;