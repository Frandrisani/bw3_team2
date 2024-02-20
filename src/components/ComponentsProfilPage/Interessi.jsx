import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllProfile } from "../../redux/actions";
import { Spinner } from "react-bootstrap/esm";

const Interest = () => {
  const dispatch = useDispatch();
  const allProfile = useSelector((state) => state.profile.allProfileList);
  const spinner = useSelector((state) => state.profile.isLoading);
  useEffect(() => {
    dispatch(getAllProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(allProfile);
  return (
    <Container>
      <Row>
        <Col className="bg-white">
          <h1>interessi</h1>
          <Row>
            {spinner === true ? (
              <Spinner className="border-top" animation="border" />
            ) : (
              allProfile
                .filter((_, index) => index > 2)
                .map(
                  (item, index) =>
                    index < 2 && (
                      <Col md={6} key={index}>
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              className="rounded-circle"
                              src={item.image}
                              alt="Profile"
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className="d-flex flex-column align-items-center ">
                            <h5>
                              {item.name} {item.surname} - 2°
                            </h5>
                            <p className="m-0"></p>
                            <span>{item.title}</span>
                            <Button
                              style={{
                                width: 100,
                                borderRadius: 50,
                                marginTop: 10,
                              }}
                              variant="outline-dark"
                            >
                              segui gia
                            </Button>
                          </div>
                        </div>
                      </Col>
                    )
                )
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Interest;
