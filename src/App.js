import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { MainContextProvider } from "./store/mainContext";
import { useReducer } from "react";
import { initialState, reducer } from "./store/reducer";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log({ state });
    return (
        <MainContextProvider value={{ state, dispatch }}>
            <div className='App'>
                <TodoList />
            </div>
        </MainContextProvider>
    );
}

export default App;
