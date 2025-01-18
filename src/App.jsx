import React from "react";
import { Route, Routes } from "react-router-dom";
import Masala1 from "./pages/Masala1";
import Header from "./components/Header";
import Masala2 from "./pages/Masala2";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route index element={<Masala1></Masala1>}></Route>
                <Route path="/masala2" element={<Masala2></Masala2>}></Route>
            </Routes>
        </div>
    );
}

export default App;
