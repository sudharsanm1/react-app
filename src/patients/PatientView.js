export default function PatientView({ name, age, location }) {
  return (
    <li key={name}>
    <p>
      Patient {name} ({age}) lives in {location}
    </p>
    </li>
  );
}
