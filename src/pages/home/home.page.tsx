import { useGetJobs } from "../../hooks/useGetJobs/useGetJobs.hook"

export const Home = () => {

  const jobs = useGetJobs()
  return (
    <div className="App">
      {
        jobs.map((e) => { return <p key={e.id}>{e.company}</p> }
        )
      }
    </div>
  )
}

