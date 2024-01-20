import HomePage from "./pages/HomePage";
import ContactForm from "./pages/ContactForm"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/contact-form" element={<ContactForm />} />
    </Routes>
  );
}

export default App;
