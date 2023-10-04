import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='car/:id' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
