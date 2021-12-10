import Routing from "./routes";
import GlobalProvider from "./context/Global";
import './css/index.css';

function App() {
  return (
    <GlobalProvider>
      <Routing />
    </GlobalProvider>
  );
}

export default App;
