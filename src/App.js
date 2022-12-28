import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import RegisterFly from "./views/RegistrerFly";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="savefly" element={<RegisterFly />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
