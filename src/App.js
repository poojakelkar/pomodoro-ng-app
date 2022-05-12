import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { MainContextProvider } from "./store/mainContext";
import { useReducer } from "react";
import { initialState, reducer } from "./store/reducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timer from "./components/PomoDoroTimer/Timer";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log({ state });
    return (
        <BrowserRouter>
            <MainContextProvider value={{ state, dispatch }}>
                <Routes>
                    <Route path='/' element={<TodoList />} />
                    <Route path='Timer' element={<Timer />} />
                </Routes>
            </MainContextProvider>
        </BrowserRouter>
    );
}

export default App;
