import { Provider } from "react-redux";
import Body from "./Components/Body";
import { store } from "./Utils/appStore";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Body />
      </div>
    </Provider>
  );
}

export default App;
