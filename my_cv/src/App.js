import logo from "./logo.svg";
import "./App.css";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";

function App() {
  return (
    <div id="basic" className="contact-info">
      <h1>Rudenko Anna</h1>
      <Contacts />
      <Experience />
    </div>
  );
}

export default App;
