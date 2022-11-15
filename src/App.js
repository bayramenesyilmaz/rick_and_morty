import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import CharacterDetails from "./pages/CharacterDetails";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
        <Route path="/detail/:id" element={<CharacterDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
