
interface Props {
  repos: any[];
}

const RepoList = ({ repos }:Props) => (
  <div className="border-2 border-black p-4 flex flex-col items-center rounded-2xl">
    <h2 className="text-xl font-bold">Repositories</h2>
    <div className=" flex flex-col gap-2 font-semibold">
      {repos.map((repo,index) => (
        <div key={index} > {index+1}. {repo.name} - {repo.description || 'No description'}</div>
      ))}
    </div>
  </div>
);

export default RepoList;