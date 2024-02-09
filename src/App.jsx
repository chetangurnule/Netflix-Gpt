import { useEffect } from "react";
import BackgroundImage from "./assets/netflix-background-img.jpg";
import { Header, Footer } from "./components";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-[600px]">
        <div className="relative backgroundImage w-full h-full bg-black bg-opacity-90">
          <img
            className="w-full h-full opacity-50"
            src={BackgroundImage}
            alt="backgroundImage"
          />
          <Form />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
