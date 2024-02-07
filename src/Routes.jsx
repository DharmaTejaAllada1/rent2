import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const RegistrationformFour = React.lazy(
  () => import("pages/RegistrationformFour"),
);
const RegistrationformThree = React.lazy(
  () => import("pages/RegistrationformThree"),
);
const RegistrationformTwo = React.lazy(
  () => import("pages/RegistrationformTwo"),
);
const RegistrationformOne = React.lazy(
  () => import("pages/RegistrationformOne"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/registrationformone"
            element={<RegistrationformOne />}
          />
          <Route
            path="/registrationformtwo"
            element={<RegistrationformTwo />}
          />
          <Route
            path="/registrationformthree"
            element={<RegistrationformThree />}
          />
          <Route
            path="/registrationformfour"
            element={<RegistrationformFour />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
