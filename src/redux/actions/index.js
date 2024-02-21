export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER"; //* PER LO SPINNER PRE-CARICAMENTO FETCH
export const PERSONAL_PROFILE = "PERSONAL_PROFILE"; //* PER IL NOSTRO PROFILO
export const ALL_PROFILE = "ALL_PROFILE"; //* PER TUTTI I PROFILI
export const ALL_EXPERIENCE = "ALL_EXPERIENCE"; //* PER TUTTE LE ESPERIENZE
export const SINGLE_EXPERIENCE = "SINGLE_EXPERIENCE"; //* PER LE SINGOLE ESPERIENZE
export const ADD_EXPERIENCE = "ADD_EXPERIENCE"; //* PER INSERIRE LE NUOVE ESPERIENZE
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE"; //* PER AGGIORNARE LE ESPERIENZE
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE"; //* PER ELIMINARE LE ESPERIENZE
export const SET_USER_ID = "SET_USER_ID";

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
          type: PERSONAL_PROFILE,
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

//* FETCH DATI SINGLE EXPERIENCE -->  Qui ci restituisce tutte le esperienze di un singolo utente
export const getSingleExperience = (id, expId) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMmIzMjI0ZjYwNTAwMTkzN2Q0N2QiLCJpYXQiOjE3MDg0MjE0NTAsImV4cCI6MTcwOTYzMTA1MH0.A7dfFaLi-Qz3L93JudrRf2DbTJnOnEHvC2GO6ohgF2U`,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        let singleExperience = await resp.json();

        dispatch({
          type: SINGLE_EXPERIENCE,
          payload: singleExperience,
        });
      } else {
        console.log("Errore nella richiesta");
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

//* FETCH DATI ALL EXPERIENCE -->  Qui ci restituisce tutte le esperienze di tutti gli utenti
export const getAllExperience = (id) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMmIzMjI0ZjYwNTAwMTkzN2Q0N2QiLCJpYXQiOjE3MDg0MjE0NTAsImV4cCI6MTcwOTYzMTA1MH0.A7dfFaLi-Qz3L93JudrRf2DbTJnOnEHvC2GO6ohgF2U`,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        let allExperience = await resp.json();

        dispatch({
          type: ALL_EXPERIENCE,
          payload: allExperience,
        });
      } else {
        console.log("Errore nella richiesta");
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

//* FETCH AGGIUNGERE ESPERIENZA -->  Qui ci permette di aggiungere una nuova esperienza
export const addExperience = (id) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMmIzMjI0ZjYwNTAwMTkzN2Q0N2QiLCJpYXQiOjE3MDg0MjE0NTAsImV4cCI6MTcwOTYzMTA1MH0.A7dfFaLi-Qz3L93JudrRf2DbTJnOnEHvC2GO6ohgF2U`,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        let addExperience = await resp.json();

        dispatch({
          type: ADD_EXPERIENCE,
          payload: addExperience,
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

//* FETCH UPDATE ESPERIENZA -->  Qui ci permette di modificare una esperienza
export const updateExperience = (id, expId) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMmIzMjI0ZjYwNTAwMTkzN2Q0N2QiLCJpYXQiOjE3MDg0MjE0NTAsImV4cCI6MTcwOTYzMTA1MH0.A7dfFaLi-Qz3L93JudrRf2DbTJnOnEHvC2GO6ohgF2U`,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        let updateExperience = await resp.json();

        dispatch({
          type: UPDATE_EXPERIENCE,
          payload: updateExperience,
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

//* FETCH DELETE ESPERIENZA -->  Qui ci permette di eliminare una esperienza
export const deleteExperience = (id, expId) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMmIzMjI0ZjYwNTAwMTkzN2Q0N2QiLCJpYXQiOjE3MDg0MjE0NTAsImV4cCI6MTcwOTYzMTA1MH0.A7dfFaLi-Qz3L93JudrRf2DbTJnOnEHvC2GO6ohgF2U`,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        let deleteExperience = await resp.json();

        dispatch({
          type: DELETE_EXPERIENCE,
          payload: deleteExperience,
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
export const setUserId = (userId) => ({
  type: SET_USER_ID,
  payload: userId,
});
