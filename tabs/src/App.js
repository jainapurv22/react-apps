import { useEffect, useState } from "react/cjs/react.development";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);
  const FetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    FetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="load">
        <h1 className="head">Loading...</h1>
      </div>
    );
  }
  const companies = jobs.map((job) => {
    return job.company;
  });
  return (
    <div className="App">
      <h1 className="head">Experience</h1>
      <div className="line"></div>
      <div className="info">
        <div className="company">
          {companies.map((company, index) => {
            return (
              <div className="btns">
                <button
                  key={index}
                  onClick={() => {
                    setValue(index);
                  }}
                  className={`${index === value && "active-btn"}`}
                >
                  {company}
                </button>
              </div>
            );
          })}
        </div>
        <div className="join-info">
          <h1>{jobs[value].title}</h1>
          <h4 className="comp">{jobs[value].company}</h4>
          <br />
          <h4 className="time">{jobs[value].dates}</h4>
          {jobs[value].duties.map((duty, index) => {
            return (
              <div className="duty" key={index}>
                <div className="icon">
                  <FaAngleDoubleRight />
                </div>
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
