import { getPatients } from "../services/patientsService";

export async function loadPatients(dispatch) {
  const patients = await getPatients();
  dispatch({
    type: "LOAD_PATIENTS",
    patients,
  });
}


export async function addPatient(
  name,
  age,
  location,
  dispatch
) {
  dispatch({
    type: "ADD_PATIENT",
    patient: { name, age, location }
  });
}