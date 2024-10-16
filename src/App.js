import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mailer from "./components/Mailer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CorporateEvent from "./pages/Corporate";
import SocialEvent from "./pages/Social";
import FestiveEvent from "./pages/Festive";
import CommunityEvent from "./pages/Community";
import WeddingEvent from "./pages/Wedding";
import PartyEvent from "./pages/Party";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
       <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" exact element={<Menu/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/corporate-event" exact element={<CorporateEvent/>} />
          <Route path="/social-event" exact element={<SocialEvent/>} />
          <Route path="/festive-event" exact element={<FestiveEvent/>} />
          <Route path="/community-event" exact element={<CommunityEvent/>} />
          <Route path="/wedding-event" exact element={<WeddingEvent/>} />
          <Route path="/party-event" exact element={<PartyEvent/>} />

        </Routes>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
