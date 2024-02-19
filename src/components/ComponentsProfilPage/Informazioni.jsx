import React, { useEffect } from 'react';
import { Card, Spinner } from "react-bootstrap"; 
import { useSelector, useDispatch } from 'react-redux';
import { getPersonalProfile } from "../../redux/actions/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Informazioni = () => {
    const dispatch = useDispatch();
    const personalProfile = useSelector(state => state.profile.profileDettagli);
    const bio = personalProfile?.bio;
    const spinner = useSelector((state) => state.profile.isLoading);

    console.log('bio', bio)
    useEffect(() => {
        console.log("Chiamata a getPersonalProfile");
        dispatch(getPersonalProfile());
    }, [dispatch]);
    
    console.log("Personal Profile:", personalProfile);
    return (
        <>
         {spinner === false ? (
        <Card className=' d-flex align-items-start'>
            
            <Card.Body>
                <strong>Informazioni</strong>
            </Card.Body>
            <Card.Body>{bio}</Card.Body>
        </Card>
         ) : (
           <div>
<Spinner animation='border'></Spinner> <br />
<p>Loading</p>
           </div>
         )}
        </>
    );
}

export default Informazioni;