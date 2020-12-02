import { Context } from "../store";
import { addPatient } from "../actions/patientActions"
import { useContext, useState } from "react";

export default function AddPatient(){

    const { dispatch } = useContext(Context);
    const [nameValue, setName] = useState("");
    const [ageValue, setAge] = useState("");
    const [locationValue, setLocation] = useState("");
  
    return (
      <div style={{ padding: "1em", background: "gray" }}>
        <p>
          Name:
          <br />
          <input onChange={e => setName(e.target.value)} type="text" />
        </p>
        <p>
          Age:
          <br />
          <input onChange={e => setAge(e.target.value)} type="text" />
        </p>
        <p>
          Location:
          <br />
          <input onChange={e => setLocation(e.target.value)} type="text" />
        </p>
        <p>
          <button onClick={() => addPatient(nameValue, ageValue, locationValue, dispatch)}>
            Save Patient
          </button>
        </p>
      </div>
    );
  };
    
