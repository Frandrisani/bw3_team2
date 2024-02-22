import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategorysJobs } from "../redux/actions";
import { ListGroup } from "react-bootstrap";

const Listjobs = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobsList);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {jobs && (
        <ListGroup>
          {jobs.map((job) => (
            <ListGroup.Item key={job.id}>
              <h1>{job.title}</h1>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default Listjobs;
