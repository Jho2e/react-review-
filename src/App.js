import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route basename={process.env.PUBLIC_URL} path="/" element={<Home />} />
        <Route
          basename={process.env.PUBLIC_URL}
          path="/movie/:id"
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
