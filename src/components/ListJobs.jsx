import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsByCategory } from "../redux/actions";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const ListJobs = ({ category }) => {
  const dispatch = useDispatch();
  const jobsData = useSelector((state) => state.jobs.jobsList);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const error = useSelector((state) => state.jobs.error);

  useEffect(() => {
    dispatch(fetchJobsByCategory(category));
  }, [dispatch, category]);

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

            {/* Aggiungi altri dettagli delle offerte di lavoro secondo necessità */}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

ListJobs.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ListJobs;
