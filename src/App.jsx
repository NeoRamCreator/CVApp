
import React from "react";
import { Routes, Route } from "react-router";
import { Projects } from "./components/Projects";
import { Layout } from "./components/Layout";


import MyApp from "./MyApp";


const App = () => {
  console.log("App")


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyApp />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );

}

export default (App);