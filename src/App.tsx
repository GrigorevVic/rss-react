import { Form1 } from "./components/Form1";
import { Form2 } from "./components/Form2";
import { HomePage } from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import "./style.css";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="form-1" element={<Form1 />}></Route>
          <Route path="form-2" element={<Form2 />}></Route>
          </Route>
      </Routes>
    </div>
  );
}


export default App;
