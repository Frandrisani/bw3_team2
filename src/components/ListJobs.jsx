import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsByCategory } from "../redux/actions";
import { ListGroup } from "react-bootstrap";

const ListJobs = () => {
  const dispatch = useDispatch();
  const jobsData = useSelector((state) => state.jobs.jobsList);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const error = useSelector((state) => state.jobs.error);

  useEffect(() => {
    dispatch(fetchJobsByCategory("Marketing"));
  }, [dispatch]);

  const jobs = jobsData?.data || [];

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ListGroup>
        {jobs.map((job) => (
          <ListGroup.Item key={job._id}>
            <h5>{job.title}</h5>
            <p>{job.company_name}</p>
            <p>{job.job_type}</p>
            <p>{job.publication_date}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListJobs;
