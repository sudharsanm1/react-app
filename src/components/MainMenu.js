import { NavLink } from "react-router-dom";

const style = {
  float: "left",
  width: "100px",
  listStyle: "none",
};

export default function MainMenu() {
  return (
    <div
      style={{
        height: "50px",
        paddingTop: "1em",
        background: "lightgray",
        width: "100%",
      }}
    >
      <ul style={{ margin: "auto", width: "400px" }}>
        <li style={style}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li style={style}>
          <NavLink to="/patients">Patients</NavLink>
        </li>
        <li style={style}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
}
