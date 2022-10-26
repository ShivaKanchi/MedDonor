import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./Screen/About";
import Contact from "./Screen/Contact";
import Donner from "./Screen/Donner";
import Event from "./Screen/Event";
import Home from "./Screen/Home";
import PageNotFound from "./Screen/PageNotFound";
import Services from "./Screen/Services";
// import SignIn from "./Screen/SignIn";
import Signin from "./Screen/Signin";
import SignUp from "./Screen/SignUp";

function App() {
  return (
    <Router>
    {/* <DocumentMeta {...meta} /> */}
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donner" element={<Donner />} />
          <Route path="/event" element={<Event />} />
          <Route path="/" element={<Signin />}  />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
