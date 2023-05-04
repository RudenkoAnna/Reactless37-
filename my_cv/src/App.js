import logo from "./logo.svg";
import "./App.css";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Image from "./components/Image";

function App() {
  const profile = process.env.PUBLIC_URL + "/Profile.jpg";
  return (
    <div id="basic" className="contact-info">
      <Image imagePath={profile} altText="My Image" width="400" height="300" />
      <h1>Rudenko Anna</h1>
      <Contacts />
      <Experience />
    </div>
  );
}

export default App;
