export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER"; //* PER LO SPINNER PRE-CARICAMENTO FETCH
export const PERSONAL_PROLFILE = "PERSONAL_PROLFILE"; //* PER IL NOSTRO PROFILO
export const ALL_PROFILE = "ALL_PROFILE"; //* PER TUTTI I PROFILI

//* FETCH DATI PROFILO PERSONALE -->  Qui in base al token che inseriamo ci restituisce gli elementi del nostro profilo
export const getPersonalProfile = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTI0NTI0ZjYwNTAwMTkzN2Q0NjEiLCJpYXQiOjE3MDgzMzE1ODksImV4cCI6MTcwOTU0MTE4OX0.OIbDf5IbLrd9Qt2Ew7hAZH_XHDZUZwraExm8Lz_cpK4`,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        let fetchedPersonalProfile = await resp.json();
       
        dispatch({
          type: PERSONAL_PROLFILE,
          payload: fetchedPersonalProfile,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      });
    }
  };
};

//* FETCH DATI TUTTI I PROFILI -->  Qui ci restiusce tutti gli utenti
export const getAllProfile = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTI0NTI0ZjYwNTAwMTkzN2Q0NjEiLCJpYXQiOjE3MDgzMzE1ODksImV4cCI6MTcwOTU0MTE4OX0.OIbDf5IbLrd9Qt2Ew7hAZH_XHDZUZwraExm8Lz_cpK4`,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        let fetchedProfile = await resp.json();
        dispatch({
          type: ALL_PROFILE,
          payload: fetchedProfile,
        });
        console.log(fetchedProfile);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      });
    }
  };
};
