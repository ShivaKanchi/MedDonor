import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./Screen/Contact";
import Donner from "./Screen/Donner";
import Event from "./Screen/Event";
import Home from "./Screen/Home";
import PageNotFound from "./Screen/PageNotFound";
import Services from "./Screen/Services";
import SignUp from "./Screen/SignUp";

function App() {
  return (
    <Router>
    {/* <DocumentMeta {...meta} /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donner" element={<Donner />} />
          <Route path="/event" element={<Event />} />
          <Route path="/signin"  />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
