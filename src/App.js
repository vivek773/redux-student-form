import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from './components/Form';
import Table from "./components/Table";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/Form" element={<Form />} />
        <Route exact path="/Table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
