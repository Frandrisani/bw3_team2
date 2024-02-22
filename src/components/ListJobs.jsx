import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsByCategory } from "../redux/actions";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const Listjobs = ({ category }) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobsList);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (category) {
      dispatch(fetchJobsByCategory(category));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, dispatch]);

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

Listjobs.propTypes = {
  category: PropTypes.string.isRequired,
};
export default Listjobs;
