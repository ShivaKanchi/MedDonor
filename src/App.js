import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//components
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Donnor from "./Pages/Donnor";
import Event from "./Pages/Event";
import EventRegister from "./Pages/EventRegister";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Services from "./Pages/Services";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
//redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./Redux/Reducers/User/user.action";
function App() {
  const user = localStorage.getItem('Donor')
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMySelf());
  // }, []);

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Home />} />}
        <Route path="/" exact element={<Navigate replace to="/signin" />} />
        {/* <Route path="/" exact element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/donnor" element={<Donnor />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eventregister" element={<EventRegister />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
