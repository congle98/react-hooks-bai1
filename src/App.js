import Navbar from "./component/Navbar";
import Todos from "./component/Todos";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./component/ThemeToggle";
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
            <AuthContextProvider>
                <Navbar></Navbar>
                <TodoContextProvider>
                    <Todos></Todos>
                </TodoContextProvider>
            </AuthContextProvider>
            <ThemeToggle></ThemeToggle>
        </ThemeContextProvider>
    </div>
  );
}

export default App;
