import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {HomePage} from './components/HomePage'
import {Productos} from "./components/Productos";


function App() {
    return (
        <>
            <h1>MainApp</h1>
            <hr/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/productos" element={<Productos/>}/>
            </Routes>
        </>
    );
}

export default App;
