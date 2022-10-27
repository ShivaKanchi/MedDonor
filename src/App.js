import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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

  const user= localStorage.getItem('token')

  return (
    <Router>
    {/* <DocumentMeta {...meta} /> */}
      <Routes>
          {user && <Route path="/" exact element={<Home />} /> } 
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/donner" exact element={<Donner />} />
          <Route path="/event" exact element={<Event />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/" exact element={<Navigate replace to="/signin" />}  />
          <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
