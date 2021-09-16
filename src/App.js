import Navbar from "./component/Navbar";
import Todos from "./component/Todos";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./component/ThemeToggle";

function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
            <Navbar></Navbar>
            <Todos></Todos>
            <ThemeToggle></ThemeToggle>
        </ThemeContextProvider>
    </div>
  );
}

export default App;
