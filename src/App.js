import Routes from "./routes";
import GlobalProvider from "./context/Global";
import './css/index.css';

function App() {
  return (
    <GlobalProvider>
      <Routes/>
    </GlobalProvider>
  );
}

export default App;
