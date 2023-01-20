import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Crew } from "./pages/Crew";
import { Destination } from "./pages/Destination";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Technology } from "./pages/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
