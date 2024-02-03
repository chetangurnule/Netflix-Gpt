import { useEffect } from "react";
import BackgroundImage from "./assets/netflix-background-img.jpg";
import { Header, Footer } from "./components";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <div className="w-full h-auto ">
        <div className="backgroundImage w-full h-full bg-black bg-opacity-90">
          <img
            className="w-[100%] h-[100%] opacity-50"
            src={BackgroundImage}
            alt="backgroundImage"
          />
        </div>
        <Header />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
