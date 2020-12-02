import logo from "./logo.svg";
import "./App.css";
import MainMenu from "./components/MainMenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import SettingsHome from "./settings/SettingsHome";
import { initialState, Context } from "./store";
import { useReducer, useEffect } from "react";
import { rootReducer } from "./reducers/rootReducer";
import PatientsHome from "./patients/PatientsHome";
import { loadPatients } from "./actions/patientActions";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = { state, dispatch };

  useEffect(() => {
    loadPatients(store.dispatch);
  }, []);

  return (
    <Context.Provider value={store}>
      <BrowserRouter>
        <div className="App">
          <h1>Patient Asyst 1.0</h1>
          <MainMenu />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/patients">
              <PatientsHome />
            </Route>
            <Route exact path="/settings">
              <SettingsHome />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
