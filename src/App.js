import ButtonColor from "./components/ButtonColor";
import { static_data } from "./config/app.static";

function App() {
  const { colors } = static_data; // extract only colors array
  return <ButtonColor color={colors} />;
}

export default App;
