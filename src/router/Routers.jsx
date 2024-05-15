import React from "react";
import { Route, Routes } from "react-router-dom";
import CarCard from "../components/CarCard";


const Router = () => {
  return (
    <Routes>
      <Route path="/CarCard" element={<CarCard />} />
    </Routes>
  );
};

export default Router;