import "./Styles/main.scss";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
