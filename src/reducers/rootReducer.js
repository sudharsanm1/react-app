export function rootReducer(state, action) {
  switch (action.type) {
    case "LOAD_PATIENTS":
      return {
        ...state,
        patients: action.patients,
      };
      case "ADD_PATIENT":
        console.log(action.patient);
        console.log((state.patients || []).concat(action.patient));
      return {
        ...state,
        patients: (state.patients || []).concat(action.patient)

      };
    default:
      return state;
  }
}
