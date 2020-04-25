import { connectRouter } from "connected-react-router";
import counterReducer from "containers/features/counter/counterSlice";

export default (history) => {
  return {
    router: connectRouter(history),
    counter: counterReducer,
  };
};
