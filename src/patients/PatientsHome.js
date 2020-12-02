import { useContext, useEffect } from "react";
import { loadPatients } from "../actions/patientActions";
import { Context } from "../store";
import PatientView from "./PatientView";
import AddPatient from "./AddPatient";

export default function PatientsHome() {
  const store = useContext(Context);
  
  return (
    <div>
      <h1>This is the patients List</h1>
      <ul style={{ listStyle: "none" }}>
        
          {store.state.patients.map((p) => (
            <PatientView name={p.name} age={p.age} location={p.location} />
          ))}
      </ul>
      <AddPatient />
    </div>
  );
}
