import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const sectionIds = [
    "services",
    "how",
    "portfolio",
    "pricing",
    "about",
    "contact",
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {sectionIds.map((id) => (
          <Route key={id} path={`/${id}`} element={<Home />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
