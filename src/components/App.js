import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPage from "./EditPage";
import HomePage from "./Homepage";



function App() {

  return (
    <>
  
      <BrowserRouter>
        <Routes>
          {/* <Route path="/*" element={<HeroSectionHomepage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/cms-login" element={<CMSLogin />}></Route>
          <Route path="/cms-form" element={<CMSForm />}></Route> */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/edit" element={<EditPage />}></Route>
          {/* <Application /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
