import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//components
import Home from "./Pages/Home";
import About from "./Pages/About";
import Event from "./Pages/Event";
import SignUp from "./Pages/SignUp";
import Medical from "./Pages/Medical";
import TalkNow from "./Component/TalkNow";
import SignIn from "./Pages/SignIn";
import Donnor from "./Pages/Donnor";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import PageNotFound from "./Pages/PageNotFound";
import EventRegister from "./Pages/EventRegister";
import MedicalRegister from "./Pages/MedicalRegister";
//redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./Redux/Reducers/User/user.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMySelf());
  }, [localStorage]);
  return (
    <>
      <Routes>
        {/* {user && <Route path="/" exact element={<Home />} />}
        <Route path="/" exact element={<Navigate replace to="/signin" />} /> */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/donnor" element={<Donnor />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eventregister" element={<EventRegister />} />
        <Route path="/medicalregister" element={<MedicalRegister />} />
        <Route path="/talknow" element={<TalkNow />} />
        {/* <Route path="/chat" element={<Chatbot />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
